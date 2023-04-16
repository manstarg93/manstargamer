export type aboutType = {
   
      _id: string,
  
      aboutTitle: string,
      imageUrl: string,
      aboutDescription: {
        children: {_key:string, text: string }[]
      }[],
      
    
}[]