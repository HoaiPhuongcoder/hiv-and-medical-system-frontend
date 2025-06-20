import type { Appointment } from "@/types/types";
import { ResultNumericForm, ResultTextForm } from "./lab-rs-form";
import { Card, CardContent } from "@/components/ui/card";

const LabRsCard = ({ appt }: { appt: Appointment }) => {
  const isConsultation = appt.serviceType === "CONSULTATION";
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent className="p-4">
        {isConsultation ? (
          <ResultNumericForm appt={appt} />
        ) : (
          <ResultTextForm appt={appt} />
        )}
      </CardContent>
    </Card>
  );
};

export default LabRsCard;
