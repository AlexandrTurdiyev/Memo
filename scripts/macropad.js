/* radio inputs */
const layersButtons = document.querySelectorAll('.page__radio-controls-input');
console.log(layersButtons);

/* macropad layers */
const macropadDefaultLayer = document.querySelector(".default-layer"),
    macropadNormalLayer = document.querySelector(".normal-layer"),
    macropadFnLayer= document.querySelector(".fn-layer"),
    macropadFn2Layer= document.querySelector(".fn2-layer"),
    macropadFn3Layer= document.querySelector(".fn3-layer");

let buttonName = '';
const layerSelect = (object) => {
    object.forEach(radio => radio.addEventListener('change', () => {
        buttonName = radio.value;
        console.log(buttonName);
        visibleActiveLayerKeys(buttonName);
    }));
}

function layerVisible (layer) {
    if (!layer.classList.contains('layer--visible')) {
        layer.classList.add('layer--visible');
    }
}

function layerInvisible (layer) {
    if (layer.classList.contains('layer--visible')) {
        layer.classList.remove('layer--visible');
    }
}

function visibleActiveLayerKeys (element) {
    switch (element) {
        case 'layer-default':
            layerVisible(macropadDefaultLayer);
            layerInvisible(macropadNormalLayer);
            layerInvisible(macropadFnLayer);
            layerInvisible(macropadFn2Layer);
            layerInvisible(macropadFn3Layer);
            console.log('select layer-default')
            break
        case 'layer-normal':
            layerVisible(macropadNormalLayer);
            layerInvisible(macropadDefaultLayer);
            layerInvisible(macropadFnLayer);
            layerInvisible(macropadFn2Layer);
            layerInvisible(macropadFn3Layer);
            console.log('select layer-normal')
            break
        case 'layer-1':
            layerVisible(macropadFnLayer);
            layerInvisible(macropadDefaultLayer);
            layerInvisible(macropadNormalLayer);
            layerInvisible(macropadFn2Layer);
            layerInvisible(macropadFn3Layer);
            console.log('select layer-1')
            break
        case 'layer-2':
            layerVisible(macropadFn2Layer);
            layerInvisible(macropadDefaultLayer);
            layerInvisible(macropadFnLayer);
            layerInvisible(macropadNormalLayer);
            layerInvisible(macropadFn3Layer);
            console.log('select layer-2')
            break
        case 'layer-3':
            layerVisible(macropadFn3Layer);
            layerInvisible(macropadDefaultLayer);
            layerInvisible(macropadFnLayer);
            layerInvisible(macropadFn2Layer);
            layerInvisible(macropadNormalLayer);
            console.log('select layer-3')
            break
    }
}

layerVisible(macropadDefaultLayer);
layerSelect(layersButtons);
visibleActiveLayerKeys(buttonName);