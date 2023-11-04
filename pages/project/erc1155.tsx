'use client'

import { useContract, useContractMetadata } from '@thirdweb-dev/react'
import HeroCard from '../../components/heroCard'
import stlyes from '../../styles/Home.module.css'
import { ERC1155_CONTRACT_ADDRESS } from '../../constants/addresses'



const ERC1155Projects = () => {

    const {contract} = useContract(ERC1155_CONTRACT_ADDRESS, 'edition-drop');

    const {data: contractMetadata, isLoading: contractMetadataIsLoading} = useContractMetadata(contract)

  return (
    <div className={stlyes.container}>
        <div className={stlyes.contractPage}>
            <HeroCard isLoading={contractMetadataIsLoading} title={contractMetadata?.name!} description={contractMetadata?.description!} image={contractMetadata?.image!} />
        </div>
    </div>
  )
}

export default ERC1155Projects