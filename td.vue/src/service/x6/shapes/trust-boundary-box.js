import { Shape } from '@antv/x6';

import { tc } from '@/i18n/index.js';

const name = 'trust-boundary-box';

/**
 * A trust boundary shape (dotted line, gray opaque background)
 * https://x6.antv.vision/en/docs/tutorial/intermediate/custom-node
 * Attrs can use standard SVG attributes (in camelCase)
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
export const TrustBoundaryBox = Shape.HeaderedRect.define({
    constructorName: name,
    width: 500,
    height: 400,
    zIndex: -50,
    attrs: {
        body: {
            rx: 10,
            ry: 10,
            strokeDasharray: '5 5',
            strokeWidth: 3,
            fillOpacity: 0
        },
        headerText: {
            text: tc('threatmodel.shapes.trustBoundary'),
            fill: '#333',
            strokeWidth: 0
        },
        header: {
            rx: 10,
            ry: 10,
            strokeWidth: 0,
            fillOpacity: 0
        }
    }
});

TrustBoundaryBox.prototype.setLabel = function (label) {
    this.setAttrByPath('headerText/text', label);
};

TrustBoundaryBox.prototype.getLabel = function () {
    return this.getAttrByPath('headerText/text');
};

TrustBoundaryBox.prototype.setName = function (name) {
    this.setAttrByPath('headerText/text', name);
};

TrustBoundaryBox.prototype.updateStyle = function () {};

TrustBoundaryBox.prototype.type = 'tm.BoundaryBox';

export default {
    name,
    TrustBoundaryBox
};
