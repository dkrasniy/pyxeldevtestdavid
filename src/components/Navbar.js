import * as React from "react"
import { Link } from "gatsby"

export default function Navbar() {
    const menu = [{label:'Home', link:'/'}, {label: 'Team', link:'/team'}, {label: 'iPhone'}, {label: 'AirPods'}]
    return (
        <div className="p-4" style={{ backgroundColor: "#3a3a3a" }}>
            <div className="max-w-4xl mx-auto text-white text-xs font-normal">
                <div className="flex space-x-10">
                    <div className="w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                    </div>
                   {menu.map((item, m)=> (
                       <Link to={item.link}>{item.label}</Link>
                   ))}
                </div>
            </div>
          
        </div>
    )

}