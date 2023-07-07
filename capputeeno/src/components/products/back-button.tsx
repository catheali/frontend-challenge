import { useRouter } from "next/navigation";
import { BackwardIcon } from "../icons/backward-icon";
import { styled } from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
	font-family: inherit;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--text-product);
`

interface BtnProps {
    navigate: string;
}

export function BackButton({ navigate }: BtnProps){
    const router = useRouter();
    const handleNavigate = () => {
        router.push(navigate)
    }
    return (
        <Button onClick={handleNavigate}>
            <BackwardIcon/>
            Voltar
        </Button>
    )
}