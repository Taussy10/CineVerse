import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function LogoSVG(props) {
  return (
    <Svg
      width={131}
      height={40}
      viewBox="0 0 131 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={17.5} cy={19.5} r={13.5} fill="url(#paint0_linear_425_166)" />
      <Path
        d="M10.429 15.135L22.956 12l.656 2.537-9.78 2.448.003.015h10.088c.002.037.004.067.004.097 0 2.19.002 4.382 0 6.573-.001 1.223-1.01 2.262-2.248 2.32-.12.005-.24.009-.362.009h-7.902c-.658 0-1.234-.22-1.704-.673a2.24 2.24 0 01-.707-1.513 5.716 5.716 0 01-.01-.357c0-1.937 0-3.875.002-5.812 0-.202-.022-.396-.075-.592-.164-.613-.319-1.228-.477-1.842-.006-.02-.009-.042-.015-.075zm1.176 4.493v4.026c0 .072.007.144.018.215.139.904.877 1.53 1.808 1.53l7.997-.001c.073 0 .146-.003.219-.009.951-.068 1.67-.828 1.67-1.768V19.628H11.605zm1.865-2.024c.02.032.032.053.046.072.3.426.601.85.899 1.278.035.05.069.07.13.07.36-.004.719-.002 1.078-.003.027 0 .054-.003.084-.006-.006-.017-.008-.027-.013-.034-.312-.444-.623-.889-.937-1.33-.02-.027-.068-.045-.103-.046-.194-.004-.387-.002-.581-.002h-.603zm5.133 1.418c-.022-.036-.033-.058-.048-.078-.3-.427-.601-.852-.9-1.28-.033-.047-.068-.062-.124-.062-.363.003-.726.001-1.088.002-.024 0-.048.002-.083.004l.037.056c.276.393.56.781.823 1.182.095.144.198.186.364.18.333-.013.667-.004 1.019-.004zm.641-1.418l.046.073c.3.426.602.851.9 1.279.035.05.071.067.132.067.356-.003.712-.001 1.068-.002.028 0 .055-.003.091-.005-.01-.021-.015-.036-.023-.047-.309-.44-.616-.88-.928-1.317-.019-.026-.066-.046-.1-.047-.207-.004-.414-.002-.62-.002h-.566zm1.852-3.06c-.02-.021-.028-.031-.037-.039-.411-.353-.822-.706-1.235-1.056a.12.12 0 00-.091-.019c-.37.09-.738.183-1.107.276-.014.003-.026.01-.06.024.029.019.046.028.06.04.352.3.711.593 1.052.905.142.13.266.175.457.116.31-.097.63-.164.961-.247zM15.5 15.945c-.015-.02-.021-.03-.03-.038-.404-.345-.81-.688-1.212-1.036-.05-.043-.089-.05-.15-.034-.3.078-.603.15-.904.226-.07.017-.138.036-.226.06l.27.23c.326.281.652.563.982.841.028.024.08.046.113.038.382-.091.763-.188 1.157-.287zm.287-1.528c.01.02.012.027.017.03.412.355.825.71 1.24 1.062.027.022.084.027.121.019.348-.084.695-.172 1.042-.259.029-.007.057-.017.097-.03-.411-.352-.813-.69-1.207-1.037-.083-.073-.156-.087-.255-.05-.068.024-.14.035-.212.053l-.843.212zm-4.176 4.6h1.205c0-.012 0-.02-.002-.024-.317-.451-.634-.903-.952-1.353a.09.09 0 00-.06-.035c-.062-.004-.124-.001-.191-.001v1.412zm-.087-2.077l1.198-.3c-.036-.026-.054-.038-.07-.052-.382-.324-.762-.649-1.142-.973-.127-.109-.173-.114-.336-.028l.35 1.353zm10.606.667c.311.442.617.867.912 1.3.073.109.151.136.27.104v-1.404h-1.182zm.384-4.874l-1.126.282-.009.027c.017.01.035.018.049.03.378.322.76.64 1.131.97.098.087.182.119.305.047l-.35-1.357z"
        fill="#fff"
      />
      <Path
        d="M16.395 20.775c.02.01.049.02.076.035l2.407 1.367.437.248c.11.063.11.147 0 .21l-2.449 1.391-.396.225c-.114.063-.187.023-.187-.103l-.001-3.24c0-.07.02-.122.113-.133z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.695 21v-6.399h4.64V21h-4.64zm-5.49 0l2.809-6.399h-5.075L86.769 21h4.437zm-5.115 2h4.238l-3.071 7h-3.654l-2.927-7h4.414l.495 1.489L86.09 23zm-1.665-2l-2.127-6.399h-5.133L79.84 21h4.585zm-8.247 0a7.524 7.524 0 00-.985-2.832 7.744 7.744 0 00-2.958-2.842c-1.237-.696-2.658-1.044-4.263-1.044-1.604 0-3.035.348-4.292 1.044a8.024 8.024 0 00-2.958 2.842c-.51.855-.838 1.8-.985 2.832h4.779c.071-.272.17-.53.295-.773a3.587 3.587 0 011.276-1.45 3.502 3.502 0 011.885-.522c.696 0 1.315.174 1.856.522.542.348.967.831 1.276 1.45.126.243.225.501.296.773h4.778zm.062 2h-4.732a3.918 3.918 0 01-.404 1.345c-.309.6-.734 1.073-1.276 1.421-.541.348-1.16.522-1.856.522a3.502 3.502 0 01-1.885-.522 3.633 3.633 0 01-1.276-1.421A3.918 3.918 0 0164.408 23h-4.732c.094 1.258.443 2.393 1.046 3.404a8.024 8.024 0 002.958 2.842c1.257.696 2.688 1.044 4.292 1.044 1.605 0 3.026-.348 4.263-1.044a7.744 7.744 0 002.958-2.842c.604-1.01.953-2.146 1.047-3.404zm20.455 0h4.64v7h-4.64v-7zm12.49 0l-5.027 7h5.481l2.563-4.503L115.178 30h5.51l-4.997-7h-6.506zm6.755-2l4.458-6.399h-5.481l-2.232 4.208-2.814-4.208h-5.568L108.985 21h6.955zm-16.925-9.444c-.87 0-1.556-.203-2.059-.609-.483-.425-.725-1.025-.725-1.798 0-.696.252-1.266.754-1.711.503-.445 1.18-.667 2.03-.667.87 0 1.547.213 2.03.638.484.406.725.986.725 1.74 0 .715-.251 1.295-.754 1.74-.483.445-1.15.667-2 .667zM35.755 30V9.7h4.408l5.817 9.466 5.9-9.466h4.233V30h-4.785v-6.322c0-1.74.04-3.306.116-4.698.029-.407.062-.813.1-1.219l-4.71 7.309h-1.915l-4.592-7.227c.027.329.05.66.068.992.097 1.353.145 2.968.145 4.843V30h-4.785z"
        fill="url(#paint1_linear_425_166)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_425_166"
          x1={4.66832}
          y1={24.1098}
          x2={34.1078}
          y2={13.9886}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F89E00" />
          <Stop offset={1} stopColor="#DA2F68" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_425_166"
          x1={35.4961}
          y1={26.2198}
          x2={124.453}
          y2={23.9271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F89E00" />
          <Stop offset={1} stopColor="#DA2F68" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default LogoSVG