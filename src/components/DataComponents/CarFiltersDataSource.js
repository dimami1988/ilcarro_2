

class CarFiltersDataSource {

    data = {};
    currentFilter = [];

    constructor(params) {

        this.data = params['make'];
        this.stepKeys = [
            'make',
            'model',
            'year',
            'engine',
            'fuel',
            'gear',
            'wheels_drive',
            'horsepower',
            'fuel_consumption'// посмотреть в сваггере
        ];

        this.currentStep = this.stepKeys[0];
    }

    nextStep() {
        const index = this.stepKeys.indexOf(this.currentStep);
        if (!index){
            this.currentStep = this.stepKeys[0];
        }
        this.currentStep = this.stepKeys[index + 1];
    }

    undoToStep(step) {
        const index = this.stepKeys.indexOf(step);
        if (!index){
            return;
        }
        this.currentStep = step;
        this.currentFilter.splice(index, this.stepKeys.length - (index + 1));
    }

    setStep(value) {
        this.currentFilter[this.currentStep] = value;
    }

    // getKeys(index, name) {
    //     const list = this.data[index];
    //     if(!list){
    //         return null;
    //     }
    //     return list[this.currentStep].map(
    //         (item) => {
    //             return item.key
    //         }
    //     );
    // }

    getProducers() {
        return this.data.map(
            (item,index) => {
                return (item.key)
            }
        );
    }

    getModelsByProducer(index,name) {

        const list = this.data[index];
        if(!list){
            return null;
        }
        this.setStep(name);
        this.nextStep();
        return list[this.currentStep].map(
            (item) => {
                return item.key
            }
        );
    }

    getYearByModel(name) {

    }

    getEngineByYear(name) {

    }

    getFuelByEngine(name) {

    }

    getGearByFuel(name) {

    }

    getWheelsDriveByGear(name) {

    }

    getHorsepowerByWheelsDrive(name) {

    }

    getConsumptionByHorsepower(name) {

    }

}

export default CarFiltersDataSource;