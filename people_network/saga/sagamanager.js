/* eslint-disable no-console */
/* eslint-disable no-debugger */

/* eslint-disable no-undef */
var SagaManager = {
};

// запуск саги
SagaManager.Run = async (sagaItems) => {
    let commonResult = []; // [ "1000085" ];
    const sagaItem1 = sagaItems[0];

    console.log("saga1");
    if (sagaItem1.transactiontype === "1") {
        try {
            const response = await (sagaItem1).onExecute(commonResult);
            if (response === undefined) {
                // если сага не повторяемая и нет обратного - сразу говорим о том, что сервис не доступен
                throw "сервис не доступен";
            }
            commonResult = response ? response : commonResult;
        }
        catch(errors) {
            sagaItem1.onErrors(); // просто уведомление о том, что сервис недоступен
        }
    }
    console.log("saga2");
    const sagaItem2 = sagaItems[1];
    if (sagaItem2.transactiontype === "1") {
        try {
            const response = await (sagaItem2).onExecute(commonResult);
            if (response === undefined) {
                // если сага не повторяемая и нет обратного - сразу говорим о том, что сервис не доступен
                throw "сервис не доступен";
            }
        }
        catch(errors) {
            sagaItem2.onErrors(); //// просто уведомление о том, что сервис недоступен
        }
    }

    console.log("saga3");

    const sagaItem3 = sagaItems[2];
    if (sagaItem3.transactiontype === "2") {
        try {

            let response = undefined;
            while(response === undefined ) {
                // повтор пока не будет доступен сервис
                response = (sagaItem3).onExecute(commonResult);
            }
        }
        catch(errors) {
        //console.log(errors);
            sagaItem3.onErrors();
        }
    }

    console.log("saga4");
    const sagaItem4 = sagaItems[3];
    let result = 0;
    if (sagaItem4.transactiontype === "3") {
        try {
            // eslint-disable-next-line no-constant-condition
            while (result === 0) {
                result = await (sagaItem4).onExecute(commonResult);
            }
        }
        catch(errors) {
            console.log(errors);
            sagaItem4.onErrors();
        }
    }
};


module.exports = SagaManager;