import React, { useState, useEffect } from 'react';

const questions = [
  "나는 감성적이어서 혼자 있을 때가 많다.", "나는 다른 사람들과 함께 일하기를 더 좋아한다.", "나는 혼자서 자신만의 고상한 취미를 즐긴다.", "나의 관심사는 다른 사람들을 도와주는 것이다.", "나는 나의 능력을 발휘하는데 많은 시간을 투자한다.", "나는 낭만적이고 예술가적인 기질이 있다.", "나는 사람들을 지나치게 칭찬한다.", "나는 내 생각보다 남의 생각에 공감할 때가 많다.", "어느 순간부터 깊게 생각하는 게 힘들다.", "나는 과정보다는 결과가 중요하다.", "나는 인간중심적이기 보다는 오히려 목표 중심적이다.", "나는 내가 이방인처럼 느낄 때가 있다.", "나는 적응력이 뛰어나 상황에 따라 적절히 대응한다.", "나는 다른 사람들보다 독특한 감정을 가지고 있다.", "하기 싫은 상황이 있을때 핑계대거나 연락을 피한다.", "나는 때로 분위기에 따라 나의 감정이 변한다.", "나는 지나치게 경쟁적이다.", "나는 친구들을 도와줄 때 기분이 좋다.", "나는 사람들에 대한 배려보다는 일의 성취를 더 중요하게 생각한다.", "나는 사람들을 관심 있게 대하고 잘 보살피는 편이다.", "나는 힘들 때 술,친구,이성 등에 의존한다.", "나는 사회적이슈(정치,종교,젠더이슈 등)에 대해서 개방적이다.", "나는 사람들과 친해지려고 많이 노력하고 있다.", "나는 따뜻하지만 때로는 질투심을 느낄 때도 있다.", "나는 성공만이 애정을 획득하는 길이라고 생각한다.", "나는 맡은 일을 효율적으로 한다.", "나는 타인의 감정을 위해 자신을 희생하기도 한다.", "나는 감동적인 것을 추구하다가 혼자 우울해지기도 한다.", "나는 타인의 호감을 얻기 위해 노력(아첨)한다.", "나는 뒤떨어지지 않기 위해 무엇인가를 끊임없이 행한다.", "나는 평범한 삶의 방식을 싫어한다.", "나는 무엇인가에 집중하여 생각한다.", "나는 자발적으로 재미있는 일을 즐긴다.", "나는 문제가 있으면 풀릴 때까지 그것만 골똘히 생각한다.", "나는 공적인 것보다는 개인생활에 대한 관심이 많다.", "나는 모험적이다.", "나는 끊임없이 변화하는 생활을 좋아한다.", "나는 명확한 지침이 있을 때 일의 능률이 오른다.", "나는 사랑하는 사람을 가끔씩 의심하는 경향이 있다.", "나는 자극이나 흥분을 유발하는 활동을 좋아한다.", "나는 분석적인 사고를 가지고 있다.", "우리 부모님은 내 일에 사사건건 간섭하는 편이다.", "나는 때때로 어린 아이처럼 유쾌하다.", "나는 가끔 자신을 부정하거나 의심한다.", "나는 시간이나 돈을 아끼는 경향이 있다.", "나는 소속집단에 협력하여 책임감을 발휘한다.", "나의 관심사는 나를 둘러싼 세계를 이해하는 것이다.", "나는 모든 일에서 안전을 중요하게 생각한다.", "나와 다른 가치관을 가진 사람을 이해할 수 없다.", "나는 스스로 고립하며 고민하기도 한다.", "나는 낙천적으로 세상을 살아간다.", "사람들은 나에게 용기가 필요하다고 말한다.", "나는 여러 가지 새로운 경험을 추구한다.", "나는 한 가지 일에 정착하기가 어렵다.", "나는 지적이며 냉철하게 관찰하는 편이다.", "나는 결과에 대한 두려움 때문에 일을 질질 끄는 경우가 있다.", "나는 머리로 모든 것을 이해하고 판단한다.", "나는 충성할 만한 사람에게는 헌신할 수 있다.", "나는 참을성이 없는 편이다.", "나는 친하게 지내는 사람과 영원한 우정을 유지하도록 노력한다.", "나는 매사에 수용적이다.", "나는 모든 일을 개선하려고 노력한다.", "나는 지도자로서의 기질이 있다.", "나는 게으른 편이다.", "나는 많은 일들을 나의 뜻대로 결정하려고 한다.", "나는 모든 일들이 순조롭게 되길 원한다.", "나는 속상한 일들을 축소하려고 한다.", "나는 때때로 분노를 느낄 때가 있다.", "신의 존재에 대해 비관적이다.(혹은 없다고 생각한다)", "나는 늘 강해야 된다고 생각한다.", "나는 도덕적으로 자제력이 있는 사람이다.", "나는 사람들과 좋은 관계를 유지하려고 한다.", "나의 행동은 원칙에 기초를 둔다.", "다수의 사람과 다른 선택을 할 때 두려움을 느낀다.", "나는 사람들을 지배하려는 경향이 있다.", "나는 완벽을 위해 끝까지 노력한다.", "나는 일을 과감하게 추진한다.", "나는 공격적으로 자기주장을 말한다.", "나는 친구의 의견에 잘 동조하는 편이다.", "나는 사람들을 통제하려 한다.", "나는 때때로 엄격하여 융통성이 없다.", "나는 사람들을 지시하여 동기를 부여한다.", "나는 세상의 일들과 조화롭게 흘러가고 싶다.", "나는 강한 자신감으로 사람들을 설득시킨다.", "1시간 이상 먼 거리에 부담을 느껴한다 .", "나는 다른 사람들로부터 신임을 얻고 있다.", "나는 다른 사람들이 하는 일에 상관하지 않는 편이다.", "나는 옳고 그름이 분명하여 때로는 비판적이다.", "나는 조화로움을 추구하는 평화주의자이다.", "낯선 사람이 말을걸때 경계하는 편이다.", "나는 주로 나의 양심과 이성에 따라 행동한다."
];

function App() {
  const [step, setStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [agree, setAgree] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', gender: '', age: '', phone: '' });
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);

  const handleRadioChange = (qIdx, score) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = score;
    setAnswers(newAnswers);
  };

  const submitToSheet = async () => {
    setLoading(true);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzBsTjKbSh5p_LTRwipYUqkQkjRI6-eEAv3CL7l91UmTRNBQ69ZvSPBoxHESm5oc7F6/exec";
    
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userInfo, answers }),
      });
      setStep(5);
    } catch (e) { 
      console.error("제출 에러:", e);
      setStep(5); 
    }
    setLoading(false);
  };

  const mainBlue = "#1d4787";
  const lightBlue = "#f0f4ff";
  const pointYellow = "#ffcc00";
  const accentGradient = `linear-gradient(135deg, ${mainBlue} 0%, #3a7bd5 100%)`;

  const fontStyle = {
    fontFamily: '"Pretendard", -apple-system, sans-serif',
    letterSpacing: '-0.025em',
  };

  return (
    <div style={{ backgroundColor: '#f4f7fa', minHeight: '100vh', ...fontStyle, color: '#333' }}>
      <link rel="stylesheet" as="style" crossOrigin="true" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css" />
      
      {/* Header - 모바일에서 질문을 가리지 않도록 sticky 위치 수정 */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)', 
        height: '64px', 
        padding: '0 24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'relative', // sticky 대신 relative로 설정하여 모바일에서 스크롤 시 위로 사라지게 함
        zIndex: 100, 
        boxSizing: 'border-box' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: mainBlue, borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '12px' }}>A</div>
          <span style={{ color: mainBlue, fontWeight: '800', fontSize: '16px' }}>APTI 성인용 검사</span>
        </div>
        {step === 4 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '12px', fontWeight: '600', color: mainBlue }}>{Math.round((answers.filter(a => a !== null).length / questions.length) * 100)}%</span>
            <div style={{ width: '60px', height: '6px', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(answers.filter(a => a !== null).length / questions.length) * 100}%`, backgroundColor: mainBlue, transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
        )}
      </div>

      <div style={{ maxWidth: '800px', margin: 'auto', padding: isMobile ? '16px 16px 40px' : '48px 24px' }}>
        
        {/* Step 0: Intro */}
        {step === 0 && (
          <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 20px 50px rgba(29, 71, 135, 0.08)', overflow: 'hidden' }}>
            <div style={{ background: accentGradient, padding: isMobile ? '40px 24px' : '80px 40px', textAlign: 'center', color: 'white' }}>
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '12px', fontWeight: '600', marginBottom: '16px' }}>Adult Psychological Type Indicator</div>
              <h1 style={{ fontSize: isMobile ? '28px' : '48px', margin: '0 0 12px 0', fontWeight: '900', letterSpacing: '-0.04em' }}>APTI-RS</h1>
              <p style={{ fontSize: isMobile ? '16px' : '20px', opacity: 0.9, fontWeight: '400' }}>기질 및 성격검사 성인용</p>
            </div>
            
            <div style={{ padding: isMobile ? '32px 20px' : '48px 60px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#f8faff', padding: '20px', borderRadius: '16px', border: '1px solid #edf2f7' }}>
                  <div style={{ fontSize: '13px', color: mainBlue, fontWeight: '800', marginBottom: '6px' }}>검사 안내</div>
                  <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>본 검사는 개인의 타고난 기질과 후천적으로 형성된 성격을 종합적으로 평가합니다.</div>
                </div>
                <div style={{ backgroundColor: '#f8faff', padding: '20px', borderRadius: '16px', border: '1px solid #edf2f7' }}>
                  <div style={{ fontSize: '13px', color: mainBlue, fontWeight: '800', marginBottom: '6px' }}>문항 및 시간</div>
                  <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>총 <strong>91문항</strong>으로 구성되어 있으며, 완료까지 <strong>약 10분</strong> 내외가 소요됩니다.</div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <label style={{ cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#666', marginBottom: '32px', userSelect: 'none' }}>
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} style={{ width: '20px', height: '20px', accentColor: mainBlue, cursor: 'pointer' }} />
                  <span>개인정보 수집 및 이용동의에 확인했습니다.</span>
                </label>
                <button 
                  style={{ 
                    width: '100%', maxWidth: '360px', padding: '18px', borderRadius: '14px', border: 'none', 
                    backgroundColor: agree ? mainBlue : '#e2e8f0', color: agree ? 'white' : '#94a3b8', 
                    fontWeight: '800', fontSize: '17px', cursor: agree ? 'pointer' : 'default', 
                    transition: 'all 0.3s ease',
                    boxShadow: agree ? '0 10px 20px rgba(29, 71, 135, 0.2)' : 'none'
                  }}
                  onClick={() => agree && setStep(1)}
                >검사 시작하기</button>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: User Info */}
        {step === 1 && (
          <div style={{ backgroundColor: 'white', padding: isMobile ? '32px 20px' : '60px', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#111', marginBottom: '8px' }}>기본 정보 입력</h3>
              <p style={{ color: '#888', fontSize: '14px' }}>정확한 분석을 위해 정보를 입력해 주세요.</p>
            </div>
            
            <div style={{ maxWidth: '480px', margin: '0 auto' }}>
              {[
                { label: '성함', type: 'text', key: 'name', placeholder: '성함을 입력해 주세요' },
                { label: '성별', type: 'radio', key: 'gender', options: ['남자', '여자'] },
                { label: '만 나이', type: 'number', key: 'age', placeholder: '숫자만 입력해 주세요' },
                { label: '연락처', type: 'tel', key: 'phone', placeholder: '010-0000-0000' }
              ].map((field) => (
                <div key={field.key} style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', marginBottom: '10px', color: '#444' }}>{field.label}</label>
                  {field.type === 'radio' ? (
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {field.options.map(o => (
                        <button 
                          key={o} 
                          onClick={() => setUserInfo({...userInfo, [field.key]: o})} 
                          style={{ 
                            flex: 1, padding: '14px', borderRadius: '12px', 
                            border: `2px solid ${userInfo[field.key] === o ? mainBlue : '#f1f5f9'}`, 
                            backgroundColor: userInfo[field.key] === o ? lightBlue : 'white', 
                            color: userInfo[field.key] === o ? mainBlue : '#64748b', 
                            fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s'
                          }}
                        >{o}</button>
                      ))}
                    </div>
                  ) : (
                    <input 
                      type={field.type} 
                      style={{ 
                        width: '100%', border: '2px solid #f1f5f9', padding: '16px', fontSize: '16px', 
                        outline: 'none', borderRadius: '12px', boxSizing: 'border-box',
                        transition: 'border-color 0.2s', backgroundColor: '#fcfdfe',
                        color: '#000' // 모바일 글자색 안보임 문제 해결을 위해 명시적으로 검은색 설정
                      }} 
                      onFocus={(e) => e.target.style.borderColor = mainBlue}
                      onBlur={(e) => e.target.style.borderColor = '#f1f5f9'}
                      placeholder={field.placeholder} 
                      value={userInfo[field.key]} 
                      onChange={e => setUserInfo({...userInfo, [field.key]: e.target.value})} 
                    />
                  )}
                </div>
              ))}
              <button 
                style={{ 
                  width: '100%', padding: '18px', borderRadius: '14px', border: 'none', 
                  backgroundColor: (userInfo.name && userInfo.gender && userInfo.age && userInfo.phone) ? mainBlue : '#e2e8f0', 
                  color: 'white', fontWeight: '800', fontSize: '17px', marginTop: '8px',
                  boxShadow: (userInfo.name && userInfo.gender && userInfo.age && userInfo.phone) ? '0 10px 20px rgba(29, 71, 135, 0.15)' : 'none',
                  cursor: (userInfo.name && userInfo.gender && userInfo.age && userInfo.phone) ? 'pointer' : 'default'
                }}
                onClick={() => (userInfo.name && userInfo.gender && userInfo.age && userInfo.phone) && setStep(4)}
              >다음으로</button>
            </div>
          </div>
        )}

        {/* Step 4: Test Body */}
        {step === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>PAGE {currentPage + 1} / {totalPages}</span>
            </div>

            {questions.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE).map((q, idx) => {
              const actualIdx = currentPage * ITEMS_PER_PAGE + idx;
              return (
                <div key={actualIdx} style={{ 
                  backgroundColor: 'white', 
                  padding: isMobile ? '28px 16px' : '48px 40px', 
                  borderRadius: '24px', 
                  boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                  border: answers[actualIdx] !== null ? '1px solid #eef2f8' : '1px solid transparent',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: '700', color: '#1a202c', lineHeight: '1.6', marginBottom: '32px', wordBreak: 'keep-all' }}>
                    <span style={{ color: mainBlue, opacity: 0.5, marginRight: '8px', fontSize: '0.85em' }}>{String(actualIdx + 1).padStart(2, '0')}</span> {q}
                  </div>
                  
                  <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', backgroundColor: '#f1f5f9', zIndex: 0 }}></div>
                      {[1, 2, 3, 4, 5].map(score => (
                        <button
                          key={score}
                          onClick={() => handleRadioChange(actualIdx, score)}
                          style={{
                            width: isMobile ? '40px' : '54px', height: isMobile ? '40px' : '54px', borderRadius: '50%',
                            border: 'none',
                            backgroundColor: answers[actualIdx] === score ? mainBlue : 'white',
                            boxShadow: answers[actualIdx] === score ? `0 6px 12px rgba(29, 71, 135, 0.3)` : '0 4px 10px rgba(0,0,0,0.05)',
                            color: answers[actualIdx] === score ? 'white' : '#cbd5e1',
                            fontSize: isMobile ? '15px' : '18px', fontWeight: '800', cursor: 'pointer', zIndex: 1, 
                            transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transform: answers[actualIdx] === score ? 'scale(1.1)' : 'scale(1)'
                          }}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '16px' }}>
                        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>전혀 아니다</span>
                        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>매우 그렇다</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div style={{ display: 'flex', gap: '10px', marginTop: '12px', paddingBottom: '60px' }}>
              {currentPage > 0 && (
                <button 
                  style={{ flex: 1, padding: '18px', borderRadius: '16px', border: '2px solid #e2e8f0', backgroundColor: 'white', color: '#64748b', fontWeight: '800', fontSize: '16px', cursor: 'pointer' }} 
                  onClick={() => {setCurrentPage(currentPage - 1); window.scrollTo(0,0);}}
                >이전</button>
              )}
              <button 
                style={{ 
                  flex: 2, padding: '18px', borderRadius: '16px', border: 'none', 
                  backgroundColor: pointYellow, color: '#1a202c', fontWeight: '900', fontSize: '16px', 
                  cursor: 'pointer', boxShadow: '0 6px 16px rgba(255,204,0,0.2)'
                }}
                onClick={() => {
                  const currentAnswers = answers.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
                  if (currentAnswers.includes(null)) {
                      alert("답변하지 않은 문항이 있습니다.");
                  } else if (currentPage < totalPages - 1) { 
                      setCurrentPage(currentPage + 1); 
                      window.scrollTo(0,0); 
                  } else {
                      submitToSheet();
                  }
                }}
              >{currentPage < totalPages - 1 ? "다음 페이지" : "검사 완료 및 제출"}</button>
            </div>
          </div>
        )}

        {/* Step 5: End */}
        {step === 5 && (
          <div style={{ backgroundColor: 'white', padding: isMobile ? '60px 20px' : '100px 40px', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ 
              width: '80px', height: '80px', backgroundColor: '#f0fdf4', color: '#22c55e', 
              borderRadius: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: '40px', margin: '0 auto 32px', transform: 'rotate(-5deg)'
            }}>✓</div>
            <h2 style={{ color: '#111', marginBottom: '16px', fontSize: '28px', fontWeight: '900', letterSpacing: '-0.03em' }}>검사가 완료되었습니다</h2>
            <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.8', wordBreak: 'keep-all' }}>
              소중한 답변 감사합니다.<br/>
              작성해주신 내용을 기반으로 전문가의 결과 분석 후<br/> 
              순차적으로 안내해 드릴 예정입니다.
            </p>
            <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #f1f5f9' }}>
               <p style={{ fontSize: '13px', color: '#cbd5e1' }}>© 2024 APTI Research Institute. All rights reserved.</p>
            </div>
          </div>
        )}
      </div>

      {loading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="spinner"></div>
            <p style={{ marginTop: '20px', fontWeight: '800', color: mainBlue, fontSize: '16px' }}>결과를 안전하게 저장하고 있습니다</p>
          </div>
          <style>{`
            .spinner { width: 40px; height: 40px; border: 4px solid #f1f5f9; border-top: 4px solid ${mainBlue}; border-radius: 50%; animation: spin 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite; margin: 0 auto; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      )}
    </div>
  );
}

export default App;