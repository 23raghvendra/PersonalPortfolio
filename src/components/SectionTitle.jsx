export function SectionTitle({ title, subtitle, centered = false }) {
    return (
        <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
