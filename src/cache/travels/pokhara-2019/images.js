const data = [
  {
    "elevation": 2607,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/a00dcb55-664a-4db7-b71e-382f6ac14684.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAgEAEAAgIBBQEBAAAAAAAAAAABAAIDESEEEjFBQlET/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AD1NvWiSKx1VvYMQUOopY54YhWMoxCj3mtviBxFX9gOUH7IDGLf2QA0SqlhlRLbrW3Uium2E3rcBcVK5F16gWMRXw8fmpFHsJUSy4q/zUOSB//9k=",
    "title": "Phewa Lake",
    "when": "November 2019"
  },
  {
    "elevation": 2607,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/a9cf40fc-77bd-4f63-a3c6-7c1d6cc3bca8.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAXACgDAREAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAQACAwT/xAAfEAACAQMFAQAAAAAAAAAAAAAAAQIDERITFDFBUVL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDrIoYAwKsIGBTcxfFgM51m+yozdR+hYNWX0wJqv1gghSlJX4RFLg12VFcWRRiBLAf/2Q==",
    "title": "Phewa Lake",
    "when": "November 2019"
  },
  {
    "elevation": 2612,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/0a6730d7-113b-4bca-b9d1-71ecf8e69713.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCAQT/xAAfEAEBAAICAgMBAAAAAAAAAAABAAIRITESEwMiQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN4/KNQyG8wj0Db4OiC+5ul5mu9XPYfrqC3lKJmPAkgh7D+WjNfziSDhmdpzbfqbQ5kg4ZbkkR//2Q==",
    "title": "Phewa Lake",
    "when": "November 2019"
  },
  {
    "elevation": 3647,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/4286cd26-eaad-47b1-96f7-2dff5ea38352.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAQACAwT/xAAfEAACAgIBBQAAAAAAAAAAAAAAAQIREjEhAxMyUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8A6LdaAGAOEuHQFaKDEI0IqR8kgCU33Ma49kurAiogFOi3OeLb1ZFazqEbQFdfWRThbZUZuVSoD//Z",
    "title": "World Peace Pagoda",
    "when": "November 2019"
  },
  {
    "elevation": 3641,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/b9fbb54b-5103-4145-afbb-84828ecdc104.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQAE/8QAHRAAAwACAgMAAAAAAAAAAAAAAAERAyETUTFBYf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQECMf/aAAwDAQACEQMRAD8A1UCoDQKgVAzvL6Mb01Dy9sudJDyfS3CB5deRSFZU1RSM9pzb9S7AVW1sqIgFJso//9k=",
    "title": "World Peace Pagoda",
    "when": "November 2019"
  },
  {
    "elevation": 2537,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/6087e410-15a0-4a8f-8781-e7e780d35c33.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EAB0QAAIDAQEAAwAAAAAAAAAAAAABAhEhMUEiUcH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACOyIp38u4BL2XQKVLP0Cu+AZxvWA2sASTu10C6b1AN3WAZQklHUAOXqAFN8fQLUqiEO/v0K/9k=",
    "title": "World Peace Pagoda",
    "when": "November 2019"
  },
  {
    "elevation": 6323,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2019/11/06/9bbcf55a-54e8-4a7e-8c6f-12d718bc0da0.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAfEAEBAAICAgMBAAAAAAAAAAABAAIRAxJRYSExMkH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCjL1cOcMuqJQoOtu/VLxbyHtp80yqxq8hlkBd+f6asDhTL9DeoccvVUpWMklpljJpYDt2fdWKo+ZLJonesq+0kBRyJJK4T/9k=",
    "title": "Sarangkot",
    "when": "November 2019"
  }
];

export default data;