
class MultiTextureRenderable extends TextureRenderable {
    // myTexture: covers the entire Renderable
    // secTex, thirdTex: effect textures
    constructor(myTexture, secTex, thirdTex = null);

    // index: 0 is not used
    //        1, 2: the effect textures
    // mode: eTexEffectFlag.eNone, eTransparent, eOverride, or eBlend
    setTexEffectMode(index, mode);

    // index: 0 not used
    //        1, 2: the effect textures
    // parm: a float array of 5 elements:
    //       0,1: u and v positions of tex in UV space
    //       2,3: w and h of tex in UV space
    //       4: rotation of tex in radian
    setTexAtSize(index, parm);

    // index: 0 not used
    //        1, 2: the effect textures
    // f: blendWeight
    setBlendFactor(index, f);

    // index: 0 not used
    //        1, 2: the effect textures
    // parm: a float array of 5 elements:
    //       0,1: u and v positions of tex in UV space
    //       2,3: w and h of tex in UV space
    //       4: rotation of tex in radian
    getTexAtSize(index, parm);

    // index: 0 not used
    //        1, 2: the effect textures
    getBlendFactor(i) { return this.mBlendFactor[i]; }

    // index: 0 not used
    //        1, 2: the effect textures
    getTexMode(i) { return this.mEffectMode[i]; }

    draw(aCamera);
}

export default MultiTextureRenderable;