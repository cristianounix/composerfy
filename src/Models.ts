export interface Service {
  serviceName: string;
  image: string;
  version: string;
  command?: string;
  environment?: string;
  volumes?: string;
  ports?: string;
}

export interface Document {
  version: string;
  services?: Array<Service>;
  networks?: Array<Service>;
}



export const initialData: Document = {
  version: '3.7',
  services: []
}