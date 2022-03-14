import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TODOMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TODO {
  readonly id: string;
  readonly type?: string;
  readonly name?: string;
  readonly isCompleted: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TODO, TODOMetaData>);
  static copyOf(source: TODO, mutator: (draft: MutableModel<TODO, TODOMetaData>) => MutableModel<TODO, TODOMetaData> | void): TODO;
}