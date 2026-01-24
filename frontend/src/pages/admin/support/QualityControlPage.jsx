import React, { useMemo } from "react";

const QualityControlPage = () => {
  const data = useMemo(
    () => ({
      averageRating: 4.6,
      trustScore: 92,
      reviews: [
        {
          id: "rev-1",
          author: "Kalkidan G.",
          note: "Queue moved faster than expected and the SMS notice was accurate.",
        },
        {
          id: "rev-2",
          author: "Yonatan M.",
          note: "Walk-in registration was easy. The dashboard screen was clear.",
        },
      ],
      flags: [
        "Repeated ratings from the same device (demo flag)",
        "Unusual review timing after midnight (demo flag)",
      ],
    }),
    [],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Reputation & Quality Control
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Only completed queue transactions generate ratings. Trust signals
          combine ratings, punctuality, and resolution metrics.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Average Rating
          </p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {data.averageRating}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Trust Score
          </p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {data.trustScore}%
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Fraud Prevention
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Suspicious patterns are flagged for review to maintain fairness.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Reviews
          </h3>
          <div className="mt-4 space-y-3">
            {data.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-800">
                  {review.author}
                </p>
                <p className="mt-2 text-sm text-slate-600">{review.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Quality Flags
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {data.flags.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ratings would be tied to completed transactions and validated by backend policies. */}
    </div>
  );
};

export default QualityControlPage;
