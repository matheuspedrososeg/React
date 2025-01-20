export default function TabButton({children, click, isCLicked}) {
    return (
        <li><button className={isCLicked ? 'active' : undefined} onClick={click}>{children}</button></li>
    )
}