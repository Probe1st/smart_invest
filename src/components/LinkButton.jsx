export default function Link({text, link, className}) {
    return (
        <span style={{cursor: "pointer"}} className={className} onClick={() => window.location.href = link}>
            {text}
        </span>
    )
}