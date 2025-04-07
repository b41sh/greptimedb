(function() {
    var type_impls = Object.fromEntries([["datatypes",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MutableVector-for-PrimitiveVectorBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#287-334\">Source</a><a href=\"#impl-MutableVector-for-PrimitiveVectorBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"datatypes/types/primitive_type/trait.LogicalPrimitiveType.html\" title=\"trait datatypes::types::primitive_type::LogicalPrimitiveType\">LogicalPrimitiveType</a>&gt; <a class=\"trait\" href=\"datatypes/vectors/trait.MutableVector.html\" title=\"trait datatypes::vectors::MutableVector\">MutableVector</a> for <a class=\"struct\" href=\"datatypes/vectors/primitive/struct.PrimitiveVectorBuilder.html\" title=\"struct datatypes::vectors::primitive::PrimitiveVectorBuilder\">PrimitiveVectorBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_type\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#288-290\">Source</a><a href=\"#method.data_type\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.data_type\" class=\"fn\">data_type</a>(&amp;self) -&gt; <a class=\"enum\" href=\"datatypes/data_type/enum.ConcreteDataType.html\" title=\"enum datatypes::data_type::ConcreteDataType\">ConcreteDataType</a></h4></section></summary><div class='docblock'>Returns the data type of the vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#292-294\">Source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the length of the vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#296-298\">Source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Convert to Any, to enable dynamic casting.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#300-302\">Source</a><a href=\"#method.as_mut_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.as_mut_any\" class=\"fn\">as_mut_any</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Convert to mutable Any, to enable dynamic casting.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_vector\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#304-306\">Source</a><a href=\"#method.to_vector\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.to_vector\" class=\"fn\">to_vector</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"datatypes/vectors/type.VectorRef.html\" title=\"type datatypes::vectors::VectorRef\">VectorRef</a></h4></section></summary><div class='docblock'>Convert <code>self</code> to an (immutable) <a href=\"datatypes/vectors/type.VectorRef.html\" title=\"type datatypes::vectors::VectorRef\">VectorRef</a> and reset <code>self</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_vector_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#308-310\">Source</a><a href=\"#method.to_vector_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.to_vector_cloned\" class=\"fn\">to_vector_cloned</a>(&amp;self) -&gt; <a class=\"type\" href=\"datatypes/vectors/type.VectorRef.html\" title=\"type datatypes::vectors::VectorRef\">VectorRef</a></h4></section></summary><div class='docblock'>Convert <code>self</code> to an (immutable) <a href=\"datatypes/vectors/type.VectorRef.html\" title=\"type datatypes::vectors::VectorRef\">VectorRef</a> and without resetting <code>self</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_push_value_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#312-319\">Source</a><a href=\"#method.try_push_value_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.try_push_value_ref\" class=\"fn\">try_push_value_ref</a>(&amp;mut self, value: <a class=\"enum\" href=\"datatypes/value/enum.ValueRef.html\" title=\"enum datatypes::value::ValueRef\">ValueRef</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"datatypes/error/type.Result.html\" title=\"type datatypes::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Try to push value ref to this mutable vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_slice_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#321-329\">Source</a><a href=\"#method.extend_slice_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.extend_slice_of\" class=\"fn\">extend_slice_of</a>(\n    &amp;mut self,\n    vector: &amp;dyn <a class=\"trait\" href=\"datatypes/vectors/trait.Vector.html\" title=\"trait datatypes::vectors::Vector\">Vector</a>,\n    offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; <a class=\"type\" href=\"datatypes/error/type.Result.html\" title=\"type datatypes::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Extend this mutable vector by slice of <code>vector</code>. <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.extend_slice_of\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_null\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#331-333\">Source</a><a href=\"#method.push_null\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#tymethod.push_null\" class=\"fn\">push_null</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Push null to this mutable vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors.rs.html#181-183\">Source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the vector is empty.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_value_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors.rs.html#204-212\">Source</a><a href=\"#method.push_value_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#method.push_value_ref\" class=\"fn\">push_value_ref</a>(&amp;mut self, value: <a class=\"enum\" href=\"datatypes/value/enum.ValueRef.html\" title=\"enum datatypes::value::ValueRef\">ValueRef</a>&lt;'_&gt;)</h4></section></summary><div class='docblock'>Push value ref to this mutable vector. <a href=\"datatypes/vectors/trait.MutableVector.html#method.push_value_ref\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_nulls\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors.rs.html#218-222\">Source</a><a href=\"#method.push_nulls\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/vectors/trait.MutableVector.html#method.push_nulls\" class=\"fn\">push_nulls</a>(&amp;mut self, num_nulls: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class='docblock'>Push nulls to this mutable vector.</div></details></div></details>","MutableVector","datatypes::vectors::date::DateVectorBuilder","datatypes::vectors::duration::DurationSecondVectorBuilder","datatypes::vectors::duration::DurationMillisecondVectorBuilder","datatypes::vectors::duration::DurationMicrosecondVectorBuilder","datatypes::vectors::duration::DurationNanosecondVectorBuilder","datatypes::vectors::interval::IntervalYearMonthVectorBuilder","datatypes::vectors::interval::IntervalMonthDayNanoVectorBuilder","datatypes::vectors::interval::IntervalDayTimeVectorBuilder","datatypes::vectors::primitive::UInt8VectorBuilder","datatypes::vectors::primitive::UInt16VectorBuilder","datatypes::vectors::primitive::UInt32VectorBuilder","datatypes::vectors::primitive::UInt64VectorBuilder","datatypes::vectors::primitive::Int8VectorBuilder","datatypes::vectors::primitive::Int16VectorBuilder","datatypes::vectors::primitive::Int32VectorBuilder","datatypes::vectors::primitive::Int64VectorBuilder","datatypes::vectors::primitive::Float32VectorBuilder","datatypes::vectors::primitive::Float64VectorBuilder","datatypes::vectors::time::TimeSecondVectorBuilder","datatypes::vectors::time::TimeMillisecondVectorBuilder","datatypes::vectors::time::TimeMicrosecondVectorBuilder","datatypes::vectors::time::TimeNanosecondVectorBuilder","datatypes::vectors::timestamp::TimestampSecondVectorBuilder","datatypes::vectors::timestamp::TimestampMillisecondVectorBuilder","datatypes::vectors::timestamp::TimestampMicrosecondVectorBuilder","datatypes::vectors::timestamp::TimestampNanosecondVectorBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ScalarVectorBuilder-for-PrimitiveVectorBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#336-367\">Source</a><a href=\"#impl-ScalarVectorBuilder-for-PrimitiveVectorBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"datatypes/scalars/trait.ScalarVectorBuilder.html\" title=\"trait datatypes::scalars::ScalarVectorBuilder\">ScalarVectorBuilder</a> for <a class=\"struct\" href=\"datatypes/vectors/primitive/struct.PrimitiveVectorBuilder.html\" title=\"struct datatypes::vectors::primitive::PrimitiveVectorBuilder\">PrimitiveVectorBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"datatypes/types/primitive_type/trait.LogicalPrimitiveType.html\" title=\"trait datatypes::types::primitive_type::LogicalPrimitiveType\">LogicalPrimitiveType</a>,\n    for&lt;'a, 'a&gt; T::<a class=\"associatedtype\" href=\"datatypes/types/primitive_type/trait.LogicalPrimitiveType.html#associatedtype.Wrapper\" title=\"type datatypes::types::primitive_type::LogicalPrimitiveType::Wrapper\">Wrapper</a>: <a class=\"trait\" href=\"datatypes/scalars/trait.Scalar.html\" title=\"trait datatypes::scalars::Scalar\">Scalar</a>&lt;VectorType = <a class=\"struct\" href=\"datatypes/vectors/primitive/struct.PrimitiveVector.html\" title=\"struct datatypes::vectors::primitive::PrimitiveVector\">PrimitiveVector</a>&lt;T&gt;&gt; + <a class=\"trait\" href=\"datatypes/scalars/trait.ScalarRef.html\" title=\"trait datatypes::scalars::ScalarRef\">ScalarRef</a>&lt;'a, ScalarType = T::<a class=\"associatedtype\" href=\"datatypes/types/primitive_type/trait.LogicalPrimitiveType.html#associatedtype.Wrapper\" title=\"type datatypes::types::primitive_type::LogicalPrimitiveType::Wrapper\">Wrapper</a>&gt; + <a class=\"trait\" href=\"datatypes/scalars/trait.Scalar.html\" title=\"trait datatypes::scalars::Scalar\">Scalar</a>&lt;RefType&lt;'a&gt; = T::<a class=\"associatedtype\" href=\"datatypes/types/primitive_type/trait.LogicalPrimitiveType.html#associatedtype.Wrapper\" title=\"type datatypes::types::primitive_type::LogicalPrimitiveType::Wrapper\">Wrapper</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.VectorType\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#343\">Source</a><a href=\"#associatedtype.VectorType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#associatedtype.VectorType\" class=\"associatedtype\">VectorType</a> = <a class=\"struct\" href=\"datatypes/vectors/primitive/struct.PrimitiveVector.html\" title=\"struct datatypes::vectors::primitive::PrimitiveVector\">PrimitiveVector</a>&lt;T&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#345-349\">Source</a><a href=\"#method.with_capacity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class='docblock'>Create a new builder with initial <code>capacity</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#351-354\">Source</a><a href=\"#method.push\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#tymethod.push\" class=\"fn\">push</a>(\n    &amp;mut self,\n    value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;Self::<a class=\"associatedtype\" href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#associatedtype.VectorType\" title=\"type datatypes::scalars::ScalarVectorBuilder::VectorType\">VectorType</a> as <a class=\"trait\" href=\"datatypes/scalars/trait.ScalarVector.html\" title=\"trait datatypes::scalars::ScalarVector\">ScalarVector</a>&gt;::<a class=\"associatedtype\" href=\"datatypes/scalars/trait.ScalarVector.html#associatedtype.RefItem\" title=\"type datatypes::scalars::ScalarVector::RefItem\">RefItem</a>&lt;'_&gt;&gt;,\n)</h4></section></summary><div class='docblock'>Push a value into the builder.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#356-360\">Source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; Self::<a class=\"associatedtype\" href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#associatedtype.VectorType\" title=\"type datatypes::scalars::ScalarVectorBuilder::VectorType\">VectorType</a></h4></section></summary><div class='docblock'>Build a new vector and reset <code>self</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/datatypes/vectors/primitive.rs.html#362-366\">Source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"datatypes/scalars/trait.ScalarVectorBuilder.html#associatedtype.VectorType\" title=\"type datatypes::scalars::ScalarVectorBuilder::VectorType\">VectorType</a></h4></section></summary><div class='docblock'>Build a new vector without resetting <code>self</code>.</div></details></div></details>","ScalarVectorBuilder","datatypes::vectors::date::DateVectorBuilder","datatypes::vectors::duration::DurationSecondVectorBuilder","datatypes::vectors::duration::DurationMillisecondVectorBuilder","datatypes::vectors::duration::DurationMicrosecondVectorBuilder","datatypes::vectors::duration::DurationNanosecondVectorBuilder","datatypes::vectors::interval::IntervalYearMonthVectorBuilder","datatypes::vectors::interval::IntervalMonthDayNanoVectorBuilder","datatypes::vectors::interval::IntervalDayTimeVectorBuilder","datatypes::vectors::primitive::UInt8VectorBuilder","datatypes::vectors::primitive::UInt16VectorBuilder","datatypes::vectors::primitive::UInt32VectorBuilder","datatypes::vectors::primitive::UInt64VectorBuilder","datatypes::vectors::primitive::Int8VectorBuilder","datatypes::vectors::primitive::Int16VectorBuilder","datatypes::vectors::primitive::Int32VectorBuilder","datatypes::vectors::primitive::Int64VectorBuilder","datatypes::vectors::primitive::Float32VectorBuilder","datatypes::vectors::primitive::Float64VectorBuilder","datatypes::vectors::time::TimeSecondVectorBuilder","datatypes::vectors::time::TimeMillisecondVectorBuilder","datatypes::vectors::time::TimeMicrosecondVectorBuilder","datatypes::vectors::time::TimeNanosecondVectorBuilder","datatypes::vectors::timestamp::TimestampSecondVectorBuilder","datatypes::vectors::timestamp::TimestampMillisecondVectorBuilder","datatypes::vectors::timestamp::TimestampMicrosecondVectorBuilder","datatypes::vectors::timestamp::TimestampNanosecondVectorBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18961]}