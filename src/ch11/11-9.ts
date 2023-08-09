type Candidate = {
  originState: number;
};

type MedicalExam = {
  isSmoker: boolean;
};

export function score(candidate: Candidate, medicalExam: MedicalExam, scoringGuide: ScoringGuide): number {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFlag = true;
  }

  let certificationGrade: 'regular' | 'low' = 'regular';
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = 'low';
    result -= 5;
  }
  // lots more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
}

export class ScoringGuide {
  stateWithLowCertification(state: number): boolean {
    return state < 5;
  }
}
