export interface modalProps {
    id: string,
    name: string,
    categories: string,
    pontoDeColeta: string,
    localizacao: string,
    onClose?: () => void, // permite passar função de fechamento
}

export default function Modal({ id, name, categories, pontoDeColeta, localizacao, onClose }: modalProps) {
    return (
        <div 
            className="overlay" 
            style={{ position: "fixed" as "fixed" }}
        >
            <div className="modal">
                <h2>Prédio {id}</h2>
                <p>{name}</p>
                <p>Categorias: {categories}</p>
                { pontoDeColeta !== "" && 
                    <p>Ponto de coleta: {pontoDeColeta}</p>
                }
                { localizacao !== "" &&
                    <p>Endereço: {localizacao}</p>
                }
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}