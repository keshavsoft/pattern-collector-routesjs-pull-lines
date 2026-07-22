import getImportLines from "pattern-collector-routesjs-import-extract";
import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ fileContent, showLog }) => {
    const importLines = getImportLines({ fileContent });

    if (showLog) console.log("importLines-7 : ", importLines);

    const useLines = getUseLines({ fileContent });

    if (showLog) console.log("useLines-11 : ", useLines);

    return {
        importLines,
        useLines
    };
};

export default startFunc;