
import { Button } from '@mui/material'

import{
    ListStyled,
    ItemListStyled,
    PhotoStyled,
    InformationStyled,
    NameStyled,
    DescriptionStyled
} from './List.style'

import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListProps{
    pets: Pet[];
}

export default function List(props: ListProps){
    const tamMax = 200;
    return(
        <ListStyled>
            {props.pets.map(pet => (
                <ItemListStyled key={pet.id}>
                    <PhotoStyled src={pet.photo} alt={pet.name}/>
                    <InformationStyled>
                        <NameStyled>{pet.name}</NameStyled>
                        <DescriptionStyled>{TextService.limitText(pet.history, tamMax)}</DescriptionStyled>
                        <Button 
                            variant={'contained'}
                            fullWidth
                            >Adotar {pet.name}
                        </Button>
                    </InformationStyled>

                </ItemListStyled>
                    )
                )
            }
        </ListStyled>
    )
}