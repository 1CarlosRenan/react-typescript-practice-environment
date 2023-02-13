import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  // 6 - redirect
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('contato enviado!')
    return navigate('/')
  }

  return (
    <div>
      <p>Details: {id} </p>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default ContactDetails;
