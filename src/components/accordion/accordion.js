import { ArrowForwardIos, Check, PriorityHigh } from "@mui/icons-material";
import React, { useState } from "react";
import { Arrow, Box, Container, Content, Desc, DescBox, DescWrapper, Header, Title, Warn, WarnWrapper, Wrapper } from "./styles";

const Accordion = ({data}) => {
    function Row(props) {
        const {row} = props;
        const [open, setOpen] = useState(false);
        const valid = row.valid_time && row.valid_amount;

        return (
            <Wrapper open={open} valid={valid}>
                <Header onClick={()=>setOpen(!open)}>
                    {valid?
                    <Check sx={{ color: '#228B22' }} style={{width: '20px'}}/>
                    :
                    <PriorityHigh sx={{ color: '#B22222'}}  style={{width: '20px'}}/>}
                    <Title>{row.name}</Title>
                    <Arrow open={open}>
                        <ArrowForwardIos style={{width: '20px'}} />
                    </Arrow>
                </Header>
                <Content>
                    {!valid &&
                        <WarnWrapper>
                            {!row.valid_time && <Warn>INVALID TIME</Warn>}
                            {!row.valid_amount && <Warn>INVALID AMOUNT</Warn>}
                        </WarnWrapper>
                    }
                    <DescBox>
                        <DescWrapper>
                            <Desc title={'true'} bold>ACCOUNT</Desc>
                            <Desc>{JSON.stringify(row.accounts, null, 4)}</Desc>
                        </DescWrapper>
                        <DescWrapper>
                            <Desc title={'true'} bold>BANK BALANCE</Desc>
                            <Desc>{JSON.stringify(row.balances, null, 4)}</Desc>
                        </DescWrapper>
                    </DescBox>
                </Content>
            </Wrapper>
        )
    }

    return (
        <Container>
            <Box>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Row row={item} />
                        </div>
                    )
                })}
            </Box>
        </Container>
    )
}

export default Accordion;