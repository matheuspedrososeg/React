export default function Section({title, children, ...props}) {
    return <section {...props}>
        <h2>{TITLE}</h2>
        {children}
    </section>
}