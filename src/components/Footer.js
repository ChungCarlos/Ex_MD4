import React from 'react';
export function Footer() {
    return (
        <footer className="footer"> {/* Sử dụng className thay vì style */}
            <hr />
            <p>Create By: ChungCarlos</p>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
}

