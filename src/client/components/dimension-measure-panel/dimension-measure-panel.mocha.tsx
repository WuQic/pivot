import { expect } from 'chai';
import * as sinon from 'sinon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import { $, Expression } from 'plywood';

import { mockRequireEnsure, mockReactComponent } from '../../utils/test-utils/index';
import { EssenceMock } from '../../../common/models/mocks';

import { DimensionListTile } from '../dimension-list-tile/dimension-list-tile';

import { DimensionMeasurePanel } from './dimension-measure-panel';

describe('DimensionMeasurePanel', () => {
  before(() => {
    mockReactComponent(DimensionListTile);
  });

  after(() => {
    (DimensionListTile as any).restore();
  });

  it('adds the correct class', () => {
    var clickyMcClickFace = {toggleMultiMeasureMode: () => {}};

    var renderedComponent = TestUtils.renderIntoDocument(
      <DimensionMeasurePanel
        clicker={clickyMcClickFace}
        essence={EssenceMock.wikiTotals()}
        menuStage={null}
        triggerFilterMenu={null}
        triggerSplitMenu={null}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((ReactDOM.findDOMNode(renderedComponent) as any).className, 'should contain class').to.contain('dimension-measure-panel');
  });

});
