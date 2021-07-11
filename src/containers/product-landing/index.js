import React, { useEffect } from 'react'
import * as PL from "./style"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductsRequest } from '../../actions/productAction';
import Product from '../../components/cardProduct'
function ProductLanding({state,getList}) {

    useEffect(()=>{
        getList()
      },[getList])
      console.log(state.allProducts)
    return (
        <PL.ProductLandingContainer>
            {/* không chỉ được số lượng trả về trong một array nên chơi cách ni hơi chuối  */}
            {
                state.allProducts?.map((product,index)=><Product key={index} item={product}/>)
            }
            {
                state.allProducts?.map((product,index)=><Product key={index} item={product}/>)
            }
            {
                state.allProducts?.map((product,index)=><Product key={index} item={product}/>)
            }
        </PL.ProductLandingContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.productReducer,
    }
  }
  const mapDispatchToProps = (dispatch) =>
    ({
        getList: () => dispatch(getProductsRequest())
    })
  
ProductLanding.propTypes = {
    getList: PropTypes.func,
  };
export default connect(mapStateToProps,mapDispatchToProps)(ProductLanding)
