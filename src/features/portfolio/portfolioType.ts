
export type portfolioType = 

    {
        portfolioTitle: string,
        portfolioLink: string,
      imageUrl: string,
        code: string,
        _id: string,
        features: string[],
       portfolioDescription: {
        children: {_key:string, text: string }[]
      }[],

    }[]
