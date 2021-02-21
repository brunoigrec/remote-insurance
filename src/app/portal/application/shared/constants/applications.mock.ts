import { Application } from '../interfaces/application.interface';

export const APPLICATIONS_MOCK: Application[] = [
  {
    id: 'c26a6305-bb51-4ae5-96ca-8bb7b7c68ccc',
    applicant: {
      firstName: 'Mark',
      lastName: 'Jameson',
      dob: '17/04/1977',
      address: {
        line1: '72 Strand Road',
        city: 'Dublin',
        country: 'Ireland',
        postcode: 'D29AGT8'
      }
    },
    status: 'APPROVED',
    createdOn: 1266715822000,
    updatedOn: 1574299822000
  }
  // {
  //   id: '7e5fbf2b-98f2-440d-9bc9-3a4deaecb203',
  //   name: 'Serious Illness Cover',
  //   description:
  //     'People are living longer than ever before. As a result, the chance of being diagnosed with a serious illness at some point in your life is greater. Many illnesses that were once incurable can now be treated successfully. However, this can lead to additional expenses while you recuperate.',
  //   createdOn: 1266715822000,
  //   updatedOn: 1574299822000,
  //   status: 'ACTIVE'
  // },
  // {
  //   id: '43007e70-3a32-4d8c-a7d6-13fa2943da81',
  //   name: 'Pension Term Insurance',
  //   description:
  //     'Pension Term is life insurance that covers the period of time up until retirement. If you die during this term, your family will receive a payment to ensure they do not suffer financial hardship. There is tax relief available on the premiums you pay under this plan.',
  //   createdOn: 1266715822000,
  //   updatedOn: 1574299822000,
  //   status: 'INACTIVE'
  // },
  // {
  //   id: 'bc6bd859-f186-450d-b294-a0feadff6e20',
  //   name: 'Whole of Life Insurance',
  //   description:
  //     'Whole of life cover is an insurance plan that lasts for a whole lifetime, and is not limited to a specific term. If you pass away this policy will provide a lump sum payment to your family. This plan will also protect your loved ones from the burden of inheritance tax.',
  //   createdOn: 1266715822000,
  //   updatedOn: 1574299822000,
  //   status: 'DRAFT'
  // },
  // {
  //   id: '346f98d3-65c2-493c-8c98-3ae1a6edbaf9',
  //   name: 'Cancer Cover',
  //   description:
  //     'Cancer Cover from Zurich Life can help you financially, giving you one less thing to worry about and letting you concentrate on the main thing – getting better.',
  //   createdOn: 1266715822000,
  //   updatedOn: 1574299822000,
  //   status: 'ACTIVE'
  // }
];
