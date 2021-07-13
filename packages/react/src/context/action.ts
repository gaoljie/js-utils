/*eslint-disable @typescript-eslint/no-explicit-any*/
type ActionMap<M extends { [key: string]: any }> = {
  [Property in keyof M]: M[Property] extends undefined
    ? {
        type: Property;
      }
    : {
        type: Property;
        payload: M[Property];
      };
};

export enum Types {
  UPDATE_COUNT = "UPDATE_COUNT",
}

interface ActionPayload {
  [Types.UPDATE_COUNT]: {
    count: number;
  };
}

export type Action = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
