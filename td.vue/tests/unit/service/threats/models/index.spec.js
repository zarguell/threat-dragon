import models from '@/service/threats/models/index.js';

describe('service/threats/models/index.js', () => {
    describe('getByTranslationValue', () => {
        it('identifies a CIA threat', () => {
            expect(models.getByTranslationValue('threats.model.cia.confidentiality'))
                .toEqual('CIA');
        });

        it('identifies a LINDUN threat', () => {
            expect(models.getByTranslationValue('threats.model.linddun.linkability'))
                .toEqual('LINDDUN');
        });

        it('identifies a STRIDE threat', () => {
            expect(models.getByTranslationValue('threats.model.stride.tampering'))
                .toEqual('STRIDE');
        });

        it('returns an empty string for an unknown type', () => {
            expect(models.getByTranslationValue('threats.models.fake'))
                .toEqual('');
        });

        it('returns an empty string for an undefined type', () => {
            expect(models.getByTranslationValue())
                .toEqual('');
        });
    });

    describe('getThreatTypesByElement', () => {
        it('gets the CIA threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('CIA', 'tm.Actor'))).toHaveLength(3);
        });

        it('gets the LINDDUN Actor threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('linddun', 'tm.Actor'))).toHaveLength(3);
        });

        it('gets the LINDDUN Process threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('linddun', 'tm.Process'))).toHaveLength(6);
        });

        it('gets the STRIDE Actor threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('Stride', 'tm.Actor'))).toHaveLength(2);
        });

        it('gets the STRIDE Process threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('Stride', 'tm.Process'))).toHaveLength(6);
        });

        it('gets the STRIDE Store threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('Stride', 'tm.Store'))).toHaveLength(4);
        });

        it('gets the STRIDE DataFlow threat types', () => {
            expect(Object.keys(models.getThreatTypesByElement('Stride', 'tm.Flow'))).toHaveLength(3);
        });

        it('returns generic threat types when the model type is not found', () => {
            console.error = jest.fn();
            expect(Object.keys(models.getThreatTypesByElement('fake', 'tm.Actor'))).toHaveLength(19);
        });
    });
});
