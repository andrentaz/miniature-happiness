/**
 * This class is a base to all the classes that tranlate Data Transfer Objects (DTOs) that come
 * from the servers
 */
export default class BaseVO {
    constructor(json = {}) {
        this.constructor.fields.forEach(field => {
            this[field.name] = json[field.name];
        });
    }

    static create(json) {
        return new this(json);
    }

    static fromServerDTO(dto) {
        const json = {};
        this.fields.forEach(field => {
            if (field.dtoName) {
                json[field.name] = dto[field.dtoName];
            } else if (field.extract) {
                json[field.name] = field.extract(dto);
            }
        });
        return this.create(json);
    }
}
