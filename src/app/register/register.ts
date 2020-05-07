export class Register {

    constructor(
      public firstName = '',
      public lastName = '',
      public email = '',
      public phone = '',
      public sendCatalog = false,
      public addressType = 'home',
      public street1?: string,
      public street2?: string,
      public city?: string,
      public state = '',
      public zip?: string) { }
  }
  