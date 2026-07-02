import { Chain, Log, Pipeline, Assertions } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock-client';
import { Arr, Strings, Global } from '@ephox/katamari';
import { SelectorFilter, Attribute, SugarElement, Remove } from '@ephox/sugar';

import { ScriptLoader } from '../../../main/ts/ScriptLoader2';
import { cRemove, cRender } from '../alien/Loader';

const opentinyScriptSrc = '/project/node_modules/opentiny/tinymce.min.js';

UnitTest.asynctest('LoadTinyTest', (success, failure) => {
  const cDeleteTinymce = Chain.op(() => {
    ScriptLoader.reinitialize();

    delete Global.tinymce;
    delete Global.tinyMCE;
    const hasTinymceUri = (attrName: string) => (elm: SugarElement<Element>) =>
      Attribute.getOpt(elm, attrName).exists((src) => Strings.contains(src, 'tinymce'));

    const elements = Arr.flatten([
      Arr.filter(SelectorFilter.all('script'), hasTinymceUri('src')),
      Arr.filter(SelectorFilter.all('link'), hasTinymceUri('href')),
    ]);

    Arr.each(elements, Remove.remove);
  });

  const cAssertOpentinyLoaded = Chain.op(() => {
    Assertions.assertEq('opentiny should have been loaded into the page', true, Global.tinymce !== undefined);
  });

  Pipeline.async({}, [
    Log.chainsAsStep('Should be able to load opentiny using the tinymceScriptSrc prop', '', [
      cDeleteTinymce,
      cRender({ tinymceScriptSrc: opentinyScriptSrc }),
      cAssertOpentinyLoaded,
      cRemove,
      cDeleteTinymce,
    ]),
  ], success, failure);
});
