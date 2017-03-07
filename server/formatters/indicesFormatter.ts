///<reference path="../../typings/modules/lodash/index.d.ts"/>
import * as _ from "lodash";



export function indiceFormatter (indices) {

    return _.reduce(_.values(indices), function (acc, indiceSessions) {

        const keys = _.keys(indiceSessions.mappings);

        const mappings = _.map(_.values(indiceSessions.mappings), function (type) {

            const name = _.keys(type.properties);
            const values = _.values(type.properties);

            return _.map(values, function (value, index) {

                for(var i = 0; i < name.length; i++) {

                    if(index == i){

                        value.name = name[i];
                    }
                }

                return value;

            })
        })

        indiceSessions.mappings[keys[0]] = mappings;

        return _.assign({}, _.cloneDeep(acc), _.cloneDeep(indiceSessions));

    }, {});

}
