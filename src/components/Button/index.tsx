import { Container, ButtonComponent } from './styles';

interface IButtonProps {
    onClick: React.MouseEventHandler<HTMLElement>;
    text: string;
}

const Button = ({onClick, text} : IButtonProps) => {
    return (
        <Container onClick={onClick}>
            <ButtonComponent>{text}</ButtonComponent>
        </Container>
    );
};

export default Button;