const data = [
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/9006d771-fa61-49bb-b976-40d1ec06da1b.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAgQAAQP/xAAjEAABAwIFBQAAAAAAAAAAAAABAAIRAyEEEkFRYRMiMUJx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCsPlbVMOBnQ2UDSAY4CCZUEhUIeLqKYZibdzZ5RBDEtmII5QadRsTmCATXYPafgQJgwitaLQ90FAwKQBtvqgOyCoGyD//Z",
    "title": "Leaving Puerto Maldonado",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/e3ceb20e-d42a-43ca-9c0b-b96872b56fb7.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAhEAACAQMEAwEAAAAAAAAAAAABEQACAyESIlGRMUFxgf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAAREgEh/9oADAMBAAIRAxEAPwDXDZOeJpk3EsJSKjJZJgKgwkTFIAUgeIPGJrvikbR1JViuu8fQ6jRkNV0LAH5GjHE672lofYq5UNd7kyUjsLEVYq5KQGYqwaikIH//2Q==",
    "title": "Entering the jungle",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/cd480d1b-28b8-4245-b5cd-6240453ef5dd.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAhEAEAAwACAgEFAAAAAAAAAAABAAIRITESQQMTIjOR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjXSu88RlXAx3vYtvx6eotFbBIrpr48abkYtU6rJFftbcoM0z+YRR+Vtw8GeoSOvmj1kJAjxoTauhx7yEJVdNQrQrIp4LkIQEofUsHS/qEIQP/9k=",
    "title": "Finca Lodge",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/2b5847f7-944f-41b3-b134-782d14acb099.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBP/EACIQAQACAQMDBQAAAAAAAAAAAAEAAhEDEkETITEzUlNhof/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AZqVYCMPiQIHmBbYUWsI5cnttKp1XgvIHvvjt1PyBdXVD01fuAXW1vjCBkMo1r5kDcjxAsoZwQC3IH//Z",
    "title": "Sunrise over the Tambopata River",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/d146dcc3-f448-4155-9a3e-9d33a14591fd.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAkEAABAgQFBQAAAAAAAAAAAAAAARECAxKBEyFCYXEEFEFRkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0ROCaUYz7iW3n4Iepls6ulgNKfQpYrjy11JcY8CaksQWbcFIp0tGzfgFHJluSyAAKUFKAAGAAH//2Q==",
    "title": "Early morning",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/c1f7edf9-dbe5-4692-a967-a4922f294b51.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIAA//EACMQAQACAQIGAwEAAAAAAAAAAAECEQADIRIiMUFRYRMycfH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AN8z0q/eAOtNPtX5ignrLHhkH7iiITY0n9wF1J8QqmAS2Lrv4yK1bmETIt94Cx5Su2ALeUdmaiIdcw2XUfBiAJ03RiCdSVsdtsuJpuNnKYV//9k=",
    "title": "Macaw Clay Lick",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/060eab75-3251-4918-8fd4-880776efe424.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgMBBP/EACIQAAICAgAGAwAAAAAAAAAAAAECABEDIRIiQWFxgTFRkf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwAYcyKOFr8wOlabakGEhdIBI9QByr8sPZgcilT0/NyNKgIDpWvu1QigL6plH1bXKMOLdtkJ8SAnAvQmUpjEoqxZkUhjSzyjxIC2BWHLYloizPiNE8Q7wNXKGNbBlSP/2Q==",
    "title": "Searching for River Otters",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/193d90ae-6945-4220-8256-04fe2e64f737.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDBAL/xAAjEAACAQQBAwUAAAAAAAAAAAAAAQMCERITIQQiMlFhcXKB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAEREgL/2gAMAwEAAhEDEQA/APesus41TLhxlj6XNaV1Fl32/SuqjiOhRl1kyrx86b/UyrU7XEifxwba08xvgDiqjlu7pv3uA2nmLsZNjAKTi5sqkYBhj0pGABD/2Q==",
    "title": "Tres Chimbadas Lake",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/7b17c10b-9c5b-4355-8b2f-8dff53f1f9a8.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBA//EAB4QAQACAgMAAwAAAAAAAAAAAAEAEQIxIUFREmFi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AhB8k1TZMVTXBKMgsW+5A0yzLjUjaPWp0Cm7H6gT8fIm5P63ECbrFW6OiMXDx5iIUvE0VNMh2dxEJWgXqIiEf/9k=",
    "title": "Machete in the jungle",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/baf52dad-3d95-40cc-9d90-889b66a9eea9.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EACAQAAICAgICAwAAAAAAAAAAAAABAhESITJBMTNRYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AHVG0ybnTo3PRFUtpVozs4cnjkl3RmTdMCnkHKk9L5AE1HJ7EuOmAB3H0P8ASalVgAUXO/oAAf/Z",
    "title": "Swampy boardwalk",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/8a8249aa-0373-4771-89c4-8ca7dc4760f0.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAiEAADAAEDBQADAAAAAAAAAAAAAQIRAyExEjJCUWEEcaH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQES/9oADAMBAAIRAxEAPwCI/Ic1xlHVa+nTXKfsxuF4/wAJxpvxM9GPQnNZ3TYx9OK0d01LX3JT07a3rK/Y0RtOZ5pAhR0rtYDoxkaXU06e3JbUy8TOH7AHFrm5arueOS4t5w9wBCssAAX/2Q==",
    "title": "Hunting for Anacondas",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/2ce80aaf-2fbb-48ec-b3e7-be7baf732dfe.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBA//EAB4QAAIDAAMAAwAAAAAAAAAAAAABAhEhEiJBEzGx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ASeqjHjY9Ik6mzJU3yS8pESTq3+FKTccWGOfbSSEA5aBTtx7K/vwhrt5gAFjfWlhm3QAhXx3G0/NABJ//2Q==",
    "title": "Squirrel Monkeys",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/64d70cd7-dddb-448b-9982-a21e8f98bad2.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEAADAAEEAwEAAAAAAAAAAAAAAQIRAyExQQQUYZH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9DkgmChgBgBgqI9R/DDbD1a4SRUHq0ul+gc35NLpFSr7FcuUkAqiK5Ot8lQqnjIRimBHbfO4H//Z",
    "title": "Above the trees",
    "when": "July 2026"
  },
  {
    "elevation": 570,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/07/19/e2ea562d-2700-4f5e-8f77-f55c4a86d58d.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECBAP/xAAiEAACAgEDBAMAAAAAAAAAAAABAgARAyExUQQTQWEiMqH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/ANMzVgikc8uYYyBVmXBaMHQMPMUOopGTvsfMQqlyFvtrxIpPTG2Howpo5qlNeqljNDZHGx/IhWa9blZd2x1065L+Q1haAA+Nm4kVO00yokHm4H//2Q==",
    "title": "Sunset in the jungle",
    "when": "July 2026"
  }
];

export default data;