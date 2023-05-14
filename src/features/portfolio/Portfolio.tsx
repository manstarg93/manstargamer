import Button from "@/component/button/Button"
import SectionWrapper from "@/component/sectionWrapper/SectionWrapper"
import Title from "@/component/title/Title"
import Image from "next/image"
import Link from "next/link"
import { RefObject, useEffect, useState } from "react"

import { PortfolioContainer, PortfolioFeature, PortfolioFeatures, PortFolioLinkContainer, PortfolioTitle, PortfolioTitleAndLink, SinglePortFolio,PortfolioImageContainer, ViewMoreButtonContainer } from "./Portfolio.styles"
import { portfolioType } from "./portfolioType"


interface Iportfolio {
portfolio: portfolioType
portfolioRef: RefObject<HTMLDivElement>
}

const Portfolio = ({portfolio,portfolioRef}:Iportfolio) => {

    const [showViewMoreButton, setShowViewMoreButton] = useState<boolean>(false)

    useEffect(() => {

        if(portfolio.length > portfolio.slice(0,4).length){
            setShowViewMoreButton(true)
        }
        
    },[])



 
const ViewMoreHandler = (event: React.MouseEvent<HTMLButtonElement> ) => {
 setShowViewMoreButton(false)

}
   
/// Portfolio handler 
const portfolioHandler = (portfolioArr: portfolioType) => {
return portfolioArr.flatMap(port => {
        const {_id, imageUrl, portfolioDescription, portfolioLink,portfolioTitle,code,features} = port

        return <SinglePortFolio key={_id}>
            <PortfolioImageContainer>
                <Image src={imageUrl} alt={portfolioTitle} width={400} height={400} priority
                
                />
        <PortfolioFeatures>
 {features.map((feature, index) => {
                    return     <PortfolioFeature key={index}>
                        {feature}
                </PortfolioFeature>
                })}
        </PortfolioFeatures>
               
            
            </PortfolioImageContainer>
            <PortfolioTitleAndLink>
                <PortfolioTitle>
                    {portfolioTitle}
                </PortfolioTitle>
                <PortFolioLinkContainer>
                    <Link target="_blank" href={code} >
                    <Button>Code</Button>
                    </Link>
  <Link href={portfolioLink} target="_blank">
                   <Button>Live</Button>
                    </Link>

                </PortFolioLinkContainer>
            </PortfolioTitleAndLink>
        </SinglePortFolio>
    })
}
 

///// Jsx Component Return 
  return (
      <SectionWrapper componentRef={portfolioRef}>
<Title title="Projects I've Done"/>
 <PortfolioContainer>

    {showViewMoreButton ? portfolioHandler(portfolio.slice(0,4)): portfolioHandler(portfolio)}

   </PortfolioContainer>

   {showViewMoreButton ? <ViewMoreButtonContainer><Button onClick={ViewMoreHandler}>View More...</Button></ViewMoreButtonContainer> :null}
      </SectionWrapper>
  
  )
}
export default Portfolio