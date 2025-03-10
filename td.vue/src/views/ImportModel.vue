<template>
    <div>
        <b-row>
            <b-col>
                <b-jumbotron class="text-center">
                    <h4>
                        {{ $t('forms.open') }} / {{ $t('dashboard.actions.import') }}
                    </h4>
                </b-jumbotron>
            </b-col>
        </b-row>
        <b-row>
            <b-col md=8 offset=2>
                <b-form>
                    <b-form-row>
                        <b-col @drop.prevent="onDropFile" @dragenter.prevent @dragover.prevent>
                            <b-form-group
                                id="json-input-group"
                                label-for="json-input">
                                <b-form-textarea
                                    id="json-input"
                                    v-model="tmJson"
                                    :placeholder="prompt"
                                    rows="16"
                                ></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col md=4 offset=2  class="text-left">
                <b-btn-group>
                    <td-form-button
                        id="td-open-btn"
                        :onBtnClick="onOpenClick"
                        icon="folder-open"
                        :text="$t('forms.open')" />
                </b-btn-group>
            </b-col>
            <b-col md=4 class="text-right">
                <b-btn-group>
                    <td-form-button
                        id="td-import-btn"
                        :isPrimary="true"
                        :onBtnClick="onImportClick"
                        icon="file-import"
                        :text="$t('forms.import')" />
                </b-btn-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import { getProviderType } from '@/service/provider/providers.js';
import TdFormButton from '@/components/FormButton.vue';
import tmActions from '@/store/actions/threatmodel.js';
import { THREATMODEL_UPDATE } from '@/store/actions/threatmodel.js';

// only search for text files
const pickerFileOptions = {
    types: [
        { description: 'Threat models', accept: { 'text/*': ['.json'] } }
    ],
    multiple: false
};

export default {
    name: 'ImportModel',
    components: {
        TdFormButton
    },
    computed: {
        ...mapState({
            providerType: state => getProviderType(state.provider.selected)
        }),
        prompt() { return '{ ' + this.$t('threatmodel.dragAndDrop') + this.$t('threatmodel.jsonPaste') + ' ... }'; }
    },
    data() {
        return {
            tmJson: ''
        };
    },
    methods: {
        onDropFile(e) {
            if (e.dataTransfer.files.length === 1) {
                let file = e.dataTransfer.files[0];
                if (file.name.endsWith('.json')) {
                    file.text()
                        .then(text => {
                            this.tmJson = text;
                            // store the file name for any future save
                            this.$store.dispatch(THREATMODEL_UPDATE, { fileName: file.name });
                            this.onImportClick();
                        })
                        .catch(e => this.$toast.error(e));
                } else {
                    this.$toast.error(this.$t('threatmodel.errors.onlyJsonAllowed'));
                }
            } else {
                this.$toast.error(this.$t('threatmodel.errors.dropSingleFileOnly'));
            }
        },
        onImportClick() {
            let jsonModel;
            try {
                jsonModel = JSON.parse(this.tmJson);
            } catch (e) {
                // this catches blatant JSON errors, not schema errors
                this.$toast.error(this.$t('threatmodel.errors.invalidJson'));
                console.error(e);
                return;
            }

            // ToDo: need to catch invalid threat model schemas, possibly using npmjs.com/package/ajv

            this.$store.dispatch(tmActions.selected, jsonModel);
            let params;
            // this will fail if the threat model does not have a title in the summary
            try {
                params = Object.assign({}, this.$route.params, {
                    threatmodel: jsonModel.summary.title
                });
            } catch (e) {
                this.$toast.error(this.$t('threatmodel.errors.invalidJson') + ' : ' + e.message);
                console.error(e);
                return;
            }
            this.$router.push({ name: `${this.providerType}ThreatModel`, params });
        },
        async onOpenClick() {
            if ('showOpenFilePicker' in window) {
                // Chrome and Edge browsers return an array of file handles
                try {
                    const [handle] = await window.showOpenFilePicker(pickerFileOptions);
                    let file = await handle.getFile();
                    if (file.name.endsWith('.json')) {
                        this.tmJson = await file.text();
                        // store the file handle for any future save
                        this.$store.dispatch(THREATMODEL_UPDATE, { fileHandle: handle });
                        this.onImportClick();
                    } else {
                        this.$toast.error(this.$t('threatmodel.errors.onlyJsonAllowed'));
                    }
                } catch (e) {
                    this.$toast.error(this.$t('threatmodel.errors.open'));
                    console.error(e);
                }
            } else {
                this.$toast.error('File picker is not yet supported on this browser: use Paste or Drag and Drop');
            }
        }
    }

};

</script>
