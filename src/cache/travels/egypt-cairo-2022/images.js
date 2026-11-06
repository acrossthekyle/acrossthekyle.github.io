const data = [
  {
    "elevation": 95,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/b645dadb-e6b9-41ef-a797-8ea11c0de22c.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAXACgDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgEE/8QAGRABAQEBAQEAAAAAAAAAAAAAAQATEQJB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/ANKRBSUgpUiJKkFJSNDZbH0wHsE7BGAPpPsE1YDowTRgmvYP/9k=",
    "title": "Pyramids of Giza",
    "when": "December 2022"
  },
  {
    "elevation": 215,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/4a450c11-fa71-4501-83de-95cf248aeecc.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAXACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCAQT/xAAcEAEBAQEAAgMAAAAAAAAAAAAAARECITESUVL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8Alh8VPDXPG+b6OjlG82e57MemyWZYneMEWM1SwbwOjF85/Md2QGTQ2OUEWbJ9QBJ//9k=",
    "title": "Pyramid of Menkaure",
    "when": "December 2022"
  },
  {
    "elevation": 209,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/20b4a5e3-bdde-4eee-a650-46a368ab6767.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAXACgDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwIEAf/EAB8QAAICAgIDAQAAAAAAAAAAAAECABEDISIxEhOBkf/EABcBAQEBAQAAAAAAAAAAAAAAAAECAAP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESAv/aAAwDAQACEQMRAD8A1MLmFCV3KSNmUGifsOoebjhWUjHKiGwkAWTOTszu7OeI1C1UgmxkAk9QKUyFdHYlypvnTqAwtTYjqORHKzNRN/JDoUBgq7H5AiJ4MMnd9xCBhd9rVTMr1ZMdC68jV3Mz/9k=",
    "title": "Pyramid of Khafre",
    "when": "December 2022"
  },
  {
    "elevation": 50,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/b3275967-68fd-4c69-ad40-df15b2a697b5.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAXACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDAf/EACMQAAIBBAEDBQAAAAAAAAAAAAABEQISITEDQWGhEyJRgZH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAwDAQACEQMRAD8AmDtupcTo1XHK2K+JW6baJSyxjAguihxE/pXpv5QpJZWg1s7+AKJVU6rMLKKnGVl7AMNpso6Svs77e4AE1pdPIACv/9k=",
    "title": "The Sphinx",
    "when": "December 2022"
  },
  {
    "elevation": 185,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/d9a7b01b-5915-493c-8c25-5a8ebd77ac58.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAXACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAfEAACAgIDAAMAAAAAAAAAAAAAAQIRAyESUWFBYqH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A1IpI1IieZR1Hb7FSO0arZEkeaWRt22XDP8S36KRbQL01a2gWkeaWaUo0lRzr0Aw23h9vwzh6AKReOcsek7XTAAH/2Q==",
    "title": "Bent Pyramid",
    "when": "December 2022"
  },
  {
    "elevation": 48,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/fe1acec1-a2b8-4d00-9e2f-7a42c4431323.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAjEAACAgAEBwEAAAAAAAAAAAAAAQIRITFBUQMSEyJCcaGR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oADAMBAAIRAxEAPwD1Ml4k9RPRky4jb7cKeupKsVRLRMpScc69CMn5NE0RtAy37A0scqrJm09/gBloabqnVfTcd1+AAFzbgAD/2Q==",
    "title": "Temple ruins",
    "when": "December 2022"
  },
  {
    "elevation": 171,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/4b67e6e3-2592-4aca-9074-dc6e6c3ff668.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAGhABAAIDAQAAAAAAAAAAAAAAAAERAhJRYf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AlKzCikKKQopEpaRWWgBKRFAGtYca6LUR1KFR6USseLQ1jhUf/9k=",
    "title": "Red Pyramid",
    "when": "December 2022"
  },
  {
    "elevation": 196,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/2db07918-d67a-41a1-a2e1-e65e051343ca.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EAB0QAAICAgMBAAAAAAAAAAAAAAABESECMQMSQVH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBEv/aAAwDAQACEQMRAD8Ay6mqxCgQIJH1r0FAsV6RizFdIBqjRcai9metPOIaeLsbRCGiN5OboK+JEjkgHe0iSHhjOhqf/9k=",
    "title": "Step Pyramid",
    "when": "December 2022"
  },
  {
    "elevation": 100,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/0826806c-c673-49a1-a9ae-79cfa77633e4.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgEE/8QAHBAAAwEAAgMAAAAAAAAAAAAAAAECAxFREyFB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oADAMBAAIRAxEAPwDS0AXIpAcikByWpAciplq8kv6YbR6IAPSQA9J7KA9J7AKtkEunIAd+wI65KDyB/9k=",
    "title": "Tower of Cairo",
    "when": "December 2022"
  },
  {
    "elevation": 69,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2022/12/28/a8f4fb49-5258-464a-8731-f4a95ae8e417.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIAA//EACAQAAICAAYDAAAAAAAAAAAAAAABAhEDBBQhMVISMlH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQES/9oADAMBAAIRAxEAPwDtQUigpjlJyTGiJc2NEHm/iKqHU7cGZrVwyzUa2QTTcTql0LkUPMLoPKqHjJv12KCtNQuopoUyheI43SXJISik3RJNCGpEn//Z",
    "title": "Cairo Sunset",
    "when": "January 2023"
  }
];

export default data;