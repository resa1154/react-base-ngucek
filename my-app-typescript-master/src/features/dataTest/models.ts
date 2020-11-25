export interface DataTestModel {
    name: string;
    code: string;
    symbol: string;
    description: string;
  }
  
  export interface CreateDataTestSuccessResponse {
    name: string;
    code: string;
    symbol: string;
    description: string;
    id: string;
    createdById: string;
    createdBy: string;
    createdDate: Date;
    modifiedById: string;
    modifiedBy: string;
    modifiedDate: Date;
    isActive: boolean;
    createdByName: string;
  }

  export interface GetDataTestSuccessResponse {
    name: string;
    code: string;
    symbol: string;
    description: string;
    id: string;
    createdById: string;
    createdBy: string;
    createdDate: Date;
    modifiedById: string;
    modifiedBy: string;
    modifiedDate: Date;
    isActive: boolean;
    createdByName: string;
  }
  