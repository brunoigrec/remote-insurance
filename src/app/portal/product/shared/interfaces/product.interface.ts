export interface Product {
  id?: string;
  name: string;
  description: string;
  createdOn: number;
  updatedOn: number;
  status: ProductStatus;
}

export type ProductStatus = 'ACTIVE' | 'INACTIVE' | 'DRAFT';
