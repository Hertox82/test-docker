import Ajv from "ajv";
import moment from "moment";
import  formatsPlugins from "ajv-formats";

const validation = (schema: any, data: any) => {
    return moment(data, 'X', true).isValid()
}

const validator = formatsPlugins(new Ajv({
    removeAdditional: false,
    useDefaults: true,
    coerceTypes: true,
}));

validator.addKeyword({
    keyword: 'isUnix',
    type: 'string',
    validate: validation
});

export default validator;

