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
        <div style={styles.overlay}>
                    <div style={styles.modal}>
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

const styles = {
    overlay: {
        position: "fixed" as "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
    },
    modal: {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
    }
};