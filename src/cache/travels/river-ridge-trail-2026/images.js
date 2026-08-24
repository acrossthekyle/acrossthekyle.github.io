const data = [
  {
    "elevation": 662,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/03/14/8e8fd062-270f-4081-96c3-ee072a81caab.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACAQAAICAgICAwAAAAAAAAAAAAABAhEDITFhMlESQpH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCOVxfsYeH+mZeLLiTrRKna27H1MWapvngUh8rdx2wHpc6AHLLqHZrD432ABZak17LB3DtAATcslN6QAA//2Q==",
    "title": "Trailhead",
    "when": "March 2026"
  },
  {
    "elevation": 662,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/03/14/2665b912-007f-485f-b636-07079e321e20.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDAf/EAB8QAAICAgEFAAAAAAAAAAAAAAABAhESIVEjMWFxkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/ANG8Iza9k10VfBE5P6juTxSIqoypIltO+aOpSq2teSN70FaOnjwCNgEKtmsYJbYBBT7MzAAloABX/9k=",
    "title": "Forest Glen",
    "when": "March 2026"
  },
  {
    "elevation": 529,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/03/14/91ed5400-2265-4b23-b20e-45bb0c6e36f3.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCAf/EAB8QAAICAgEFAAAAAAAAAAAAAAABAhEhQRIDIjEygf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/ANwkl04q/B1S7X9J1hDiq2SrFYtKVMnN1KzvCneic1nGRSNRdJNvQJ02BSN2bh7AEVTJiUdoACewAB//2Q==",
    "title": "Forest Glen",
    "when": "March 2026"
  },
  {
    "elevation": 529,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/03/14/3c8c077a-72fd-4319-8faa-7c03ad505b8a.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAB/8QAIRAAAgIBAwUBAAAAAAAAAAAAAAERIQISMVEiIzJBcYH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMnq/B6mlXAV5TInGl0Sosc+2lAbZiaW1mz9AJGq3WxABOaFMTwRAbheMi9kQBbhtkRAf//Z",
    "title": "Forest Glen",
    "when": "March 2026"
  },
  {
    "elevation": 662,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/03/14/bfb02a8a-045d-456f-a389-95aefbff4628.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAfEAACAQQCAwAAAAAAAAAAAAAAASECERJRA0ETMVL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDS0mcw0yjJ7Yyf0yVYn5Lcjoam8FtzLVPInefZPJ7YpF89Az3ewKRG7dKt2dSewAphk4ch0NxlKAAKl7kAEH//2Q==",
    "title": "Forest Glen",
    "when": "March 2026"
  },
  {
    "elevation": 675,
    "src": "https://ik.imagekit.io/acrossthekyle/uploads/2026/03/14/1e1be596-c236-4cee-9eb2-fac89329e0e6.jpeg",
    "thumb": "data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAWACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EACEQAAIBAwMFAAAAAAAAAAAAAAABERJSoQIhkSIxUVOC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDokSSSd74RpJ3YFwmqbCfBP7wN/Y+EKRQE+q/AFWJyxUAZaExVLACGpx2AAV//2Q==",
    "title": "Forest Glen",
    "when": "March 2026"
  }
];

export default data;