export const conditionalRender = (condition, trueRender, falseRender) => {

    if (condition) return trueRender;
    return falseRender;

}