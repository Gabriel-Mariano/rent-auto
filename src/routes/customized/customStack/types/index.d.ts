import { IAutoProps } from '@src/@types/autoType';

type StackProps = {
   Home:undefined;
   Details:IAutoProps  | undefined;
   Calendar:IAutoProps | undefined;
   Finalize:IAutoProps | undefined;
   Identifier:IAutoProps | undefined;
   Settings:undefined; 
}

type RouteParams = {
   route: {
      params: IAutoProps;
   }
}

export { StackProps, RouteParams  };