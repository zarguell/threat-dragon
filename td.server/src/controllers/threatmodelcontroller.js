import loggerHelper from '../helpers/logger.helper.js';
import repository from '../repositories/threatmodelrepository.js';
import responseWrapper from './responseWrapper.js';
import { serverError } from './errors.js';

const logger = loggerHelper.get('controllers/threatmodelcontroller.js');

const repos = (req, res) => responseWrapper.sendResponseAsync(async () => {
    const page = req.query.page || 1;
    const reposResp = await repository.reposAsync(page, req.provider.access_token);
    const repos = reposResp[0];
    const headers = reposResp[1];
    logger.debug('API repos request: ' + req);

    return {
        repos: repos.map((x) => x.full_name),
        pagination: getPagination(headers, page)
    };
}, req, res, logger);

const branches = (req, res) => responseWrapper.sendResponseAsync(async () => {
    const repoInfo = {
        organisation: req.params.organisation,
        repo: req.params.repo,
        page: req.query.page || 1
    };
    logger.debug('API branches request: ' + req);

    const branchesResp = await repository.branchesAsync(repoInfo, req.provider.access_token);
    const branches = branchesResp[0];
    const headers = branchesResp[1];
    const branchNames = branches.map((x) => x.name);

    return {
        branches: branchNames,
        pagination: getPagination(headers, repoInfo.page)
    };
}, req, res, logger);

const models = (req, res) => responseWrapper.sendResponseAsync(async () => {
    const branchInfo = {
        organisation: req.params.organisation,
        repo: req.params.repo,
        branch: req.params.branch
    };
    logger.debug('API models request: ' + req);

    let modelsResp;
    try {
        modelsResp = await repository.modelsAsync(branchInfo, req.provider.access_token);
    } catch (e) {
        if (e.statusCode === 404) {
            return [];
        }

        throw e;
    }
    return modelsResp[0].map((x) => x.name);
}, req, res, logger);

const model = (req, res) => responseWrapper.sendResponseAsync(async () => {
    const modelInfo = {
        organisation: req.params.organisation,
        repo: req.params.repo,
        branch: req.params.branch,
        model: req.params.model
    };
    logger.debug('API model request: ' + req);

    const modelResp = await repository.modelAsync(modelInfo, req.provider.access_token);
    return JSON.parse(Buffer.from(modelResp[0].content, 'base64').toString('utf8'));
}, req, res, logger);

const create = async (req, res) => {
    const modelBody = {
        organisation: req.params.organisation,
        repo: req.params.repo,
        branch: req.params.branch,
        model: req.params.model,
        body: req.body
    };
    logger.debug('API create request: ' + req);

    try {
        const createResp = await repository.createAsync(modelBody, req.provider.access_token);
        return res.status(201).send(createResp);
    } catch (err) {
        logger.error(err);
        return serverError('Error creating model', res, logger);
    }
};

const update = async (req, res) => {
    const modelBody = {
        organisation: req.params.organisation,
        repo: req.params.repo,
        branch: req.params.branch,
        model: req.params.model,
        body: req.body
    };
    logger.debug('API update request: ' + req);

    try {
        const updateResp = await repository.updateAsync(modelBody, req.provider.access_token);
        return res.send(updateResp);
    } catch (err) {
        logger.error(err);
        return serverError('Error updating model', res, logger);
    }
};

const deleteModel = async (req, res) => {
    const modelInfo = {
        organisation: req.params.organisation,
        repo: req.params.repo,
        branch: req.params.branch,
        model: req.params.model
    };
    logger.debug('API deleteModel request: ' + req);

    try {
        const deleteResp = await repository.deleteAsync(modelInfo, req.provider.access_token);
        return res.send(deleteResp);
    } catch (err) {
        logger.error(err);
        return serverError('Error deleting model', res, logger);
    }
};

const getPagination = (headers, page) => {
    const pagination = { page, next: false, prev: false };
    const linkHeader = headers.link;

    if (linkHeader) {
        linkHeader.split(',').forEach((link) => {
            const isLinkType = (type) => link.split(';')[1].split('=')[1] === type;

            if (isLinkType('"next"')) {
                pagination.next = true;
            }

            if (isLinkType('"prev"')) {
                pagination.prev = true;
            }
        });
    }

    return pagination;
};

export default {
    branches,
    create,
    deleteModel,
    model,
    models,
    repos,
    update
};
