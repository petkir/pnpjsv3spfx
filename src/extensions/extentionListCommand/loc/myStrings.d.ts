declare interface IExtentionListCommandCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ExtentionListCommandCommandSetStrings' {
  const strings: IExtentionListCommandCommandSetStrings;
  export = strings;
}
