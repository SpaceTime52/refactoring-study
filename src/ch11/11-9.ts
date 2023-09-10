// Chapter 11-9. 함수를 명령으로 바꾸기 커맨드패턴
import { Candidate, MedicalExam } from './chapter-11.types';

// 명령 객체
export class ScoreCalculator {
  #candidate: Candidate;
  #medicalExam: MedicalExam;
  #scoringGuide: ScoringGuide;

  constructor(
    candidate: Candidate,
    medicalExam: MedicalExam,
    scoringGuide: ScoringGuide,
  ) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  execute(): number {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.#medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }

    let certificationGrade: 'regular' | 'low' = 'regular';
    if (
      this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)
    ) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

export class ScoringGuide {
  stateWithLowCertification(state: number): boolean {
    return state < 5;
  }
}

// 사용
const candidate = { originState: 1 };
const medicalExam = { isSmoker: true };
const scoringGuide = new ScoringGuide();
const scoreCalculator = new ScoreCalculator(
  candidate,
  medicalExam,
  scoringGuide,
);

console.log(scoreCalculator.execute()); // 실행 결과: 5
