
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.name.fullName(),
email: faker.internet.email(),
jobRole: faker.name.jobType(),
experience: faker.name.jobDescriptor(),
skills: faker.company.suffixes(),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
