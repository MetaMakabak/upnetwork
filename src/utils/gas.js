export async function getGasConfig(signer, multiplier = 5, priorityMultiplier = 2) {
    if (!signer) {
        return {};
    }

    const feeData = await signer.getFeeData();
    const gasPriceRaw = await signer.getGasPrice();

    console.log("feeData", feeData, gasPriceRaw);

    const baseFee = feeData.lastBaseFeePerGas;

    const gasPrice = feeData.gasPrice;
    const priorityFee = gasPrice.sub(baseFee);

    const gasType = getGasType();

    let result = {};

    // if (gasType === "fast") {
    //     result = {
    //         maxPriorityFeePerGas: priorityFee.mul(2),
    //         maxFeePerGas: baseFee.mul(2).add(priorityFee.mul(2)),
    //     };
    // } else if (gasType === "average") {
    //     result = {
    //         maxPriorityFeePerGas: priorityFee,
    //         maxFeePerGas: baseFee.add(priorityFee),
    //     };
    // } else if (gasType === "slow") {
    //     result = {
    //         maxPriorityFeePerGas: priorityFee.div(2),
    //         maxFeePerGas: (baseFee.div(2)).add(priorityFee.div(2)),
    //     };
    // }

    if (gasType === "fast") {
        const _maxFeePerGas = baseFee.mul(multiplier).add(priorityFee.mul(priorityMultiplier));
        const _maxPriorityFeePerGas = priorityFee.mul(priorityMultiplier);
        result = {
            maxPriorityFeePerGas: _maxPriorityFeePerGas,
            maxFeePerGas: _maxFeePerGas,
        };
    }

    /*result = {
        maxPriorityFeePerGas: gasPriceRaw.mul(5),
        maxFeePerGas: gasPriceRaw.mul(5),
    };*/

    console.log("get Gas Config", gasType, result?.maxFeePerGas?.toString(), result?.maxPriorityFeePerGas?.toString())

    return result;
}

export function setGasType(gasType) {
    localStorage.setItem("gas-type", gasType);
}

export function getGasType() {
    return localStorage.getItem("gas-type") || "fast";
}
